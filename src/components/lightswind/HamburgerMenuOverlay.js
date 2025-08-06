"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { cn } from "../lib/utils"; // Assuming 'cn' utility is available for class concatenation
import { Menu, X } from "lucide-react"; // Icons for hamburger and close buttons

/**
 * HamburgerMenuOverlay Component
 * A full-screen overlay menu that animates from a specified button position.
 * It can be controlled externally or manage its own internal state.
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.items - Array of menu items, each with { label, icon, onClick, href }.
 * @param {string} [props.buttonTop="20px"] - CSS 'top' value for the hamburger button (viewport-relative).
 * @param {string} [props.buttonLeft="calc(100vw - 60px)"] - CSS 'left' value for the hamburger button (viewport-relative, adjusted for right).
 * @param {"sm"|"md"|"lg"} [props.buttonSize="md"] - Size of the hamburger button.
 * @param {string} [props.buttonColor="rgba(255, 255, 255, 0.1)"] - Background color of the hamburger button.
 * @param {string} [props.overlayBackground="linear-gradient(...)"] - Background style for the full-screen overlay.
 * @param {string} [props.textColor="#ffffff"] - Color for menu item text and icons.
 * @param {"sm"|"md"|"lg"|"xl"|"2xl"} [props.fontSize="md"] - Font size for menu items.
 * @param {string} [props.fontFamily='"Krona One", monospace'] - Font family for menu items.
 * @param {string} [props.fontWeight="bold"] - Font weight for menu items.
 * @param {number} [props.animationDuration=0.8] - Duration of the overlay open/close animation in seconds.
 * @param {number} [props.staggerDelay=0.05] - Delay between each menu item's animation in seconds.
 * @param {"left"|"center"|"right"} [props.menuAlignment="center"] - Text alignment for menu items.
 * @param {string} [props.className] - Additional CSS classes for the main container.
 * @param {string} [props.buttonClassName] - Additional CSS classes for the hamburger button.
 * @param {string} [props.menuItemClassName] - Additional CSS classes for individual menu items.
 * @param {boolean} [props.keepOpenOnItemClick=false] - If true, the menu stays open after clicking an item.
 * @param {React.ReactNode} [props.customButton] - Custom React node to use as the hamburger button.
 * @param {string} [props.ariaLabel="Navigation menu"] - ARIA label for the button.
 * @param {boolean} [props.isOpen] - Controlled prop for the menu's open state.
 * @param {function} [props.setIsOpen] - Controlled setter for the menu's open state.
 * @param {function} [props.onOpen] - Callback function when the menu opens.
 * @param {function} [props.onClose] - Callback function when the menu closes.
 * @param {"vertical"|"horizontal"} [props.menuDirection="vertical"] - Layout direction of menu items.
 * @param {boolean} [props.enableBlur=true] - Enables backdrop blur effect for the overlay.
 * @param {number} [props.zIndex=1000] - CSS z-index for the overlay.
 * @param {string} [props.activeItem] - The label of the currently active menu item.
 */
export const HamburgerMenuOverlay = ({
  items = [],
  buttonTop = "20px",
  buttonLeft = "calc(100vw - 60px)",
  buttonSize = "md",
  buttonColor = "rgba(255, 255, 255, 0.1)",
  overlayBackground = "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,0.98) 50%, rgba(0,0,0,0.95) 100%)",
  textColor = "#ffffff",
  fontSize = "md",
  fontFamily = '"Krona One", monospace',
  fontWeight = "bold",
  animationDuration = 0.8,
  staggerDelay = 0.05,
  menuAlignment = "center",
  className,
  buttonClassName,
  menuItemClassName,
  keepOpenOnItemClick = false,
  customButton,
  ariaLabel = "Navigation menu",
  isOpen: controlledIsOpen, // Controlled prop for open state
  setIsOpen: setControlledIsOpen, // Controlled setter for open state
  onOpen,
  onClose,
  menuDirection = "vertical",
  enableBlur = true,
  zIndex = 1000,
  activeItem, // New prop for active item
}) => {
  // Determine if the component is controlled or uses internal state
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = setControlledIsOpen !== undefined ? setControlledIsOpen : setInternalIsOpen;

  const navRef = useRef(null); // Ref for the navigation overlay container
  const containerRef = useRef(null); // Ref for the main component container

  // Define Tailwind CSS classes for button sizes
  const buttonSizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };
  // Define Tailwind CSS classes for font sizes
  const fontSizes = {
    sm: "text-2xl md:text-3xl",
    md: "text-3xl md:text-4xl",
    lg: "text-4xl md:text-5xl",
    xl: "text-5xl md:text-6xl",
    "2xl": "text-6xl md:text-7xl",
  };

  // Function to toggle the menu's open/close state
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (newState) {
      onOpen?.(); // Call onOpen callback if provided
    } else {
      onClose?.(); // Call onClose callback if provided
    }
  };

  // Handler for when a menu item is clicked
  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(); // Execute item's onClick function
    }
    if (item.href && !item.onClick) {
      window.location.href = item.href; // Navigate if href is provided and no onClick
    }
    if (!keepOpenOnItemClick) {
      setIsOpen(false); // Close menu unless keepOpenOnItemClick is true
      onClose?.(); // Call onClose callback
    }
  };

  // Effect to close menu on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape); // Cleanup event listener
  }, [isOpen, setIsOpen, onClose]);

  // Effect to prevent body scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable body scrolling
    } else {
      document.body.style.overflow = ''; // Re-enable body scrolling
    }
    return () => {
      document.body.style.overflow = ''; // Ensure scrolling is re-enabled on unmount
    };
  }, [isOpen]);

  return _jsxs("div", {
    ref: containerRef,
    // The main container is fixed and covers the entire viewport.
    // Pointer events are controlled to only be active when the menu is open.
    className: cn("fixed inset-0 pointer-events-none", isOpen && "pointer-events-auto", className),
    style: { zIndex: zIndex }, // Set z-index for the entire component
    children: [
      // Inline style tag for dynamic CSS based on props
      _jsx("style", {
        children: `
          @import url('https://fonts.googleapis.com/css2?family=Krona+One:wght@400&display=swap');
          
          /* Styles for the full-screen overlay */
          .hamburger-overlay-${zIndex} {
            position: fixed; /* Ensures it covers the entire viewport */
            inset: 0; /* Top, right, bottom, left are all 0 */
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: start;
            align-items: center;
            background: ${overlayBackground}; /* Dynamic background */
            z-index: ${zIndex}; /* Dynamic z-index */
            /* Clip-path for circular reveal animation, originating from the button's position */
            clip-path: circle(0px at ${buttonLeft} ${buttonTop});
            transition: clip-path ${animationDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            ${enableBlur ? "backdrop-filter: blur(10px);" : ""} /* Dynamic backdrop blur */
          }
          
          .hamburger-overlay-${zIndex}.open {
            clip-path: circle(150% at ${buttonLeft} ${buttonTop}); /* Expands to cover the screen */
          }
          
          /* Styles for the hamburger/close button */
          .hamburger-button-${zIndex} {
            position: fixed; /* Ensures button stays in place relative to viewport */
            left: ${buttonLeft};
            top: ${buttonTop};
            transform: translate(-50%, -50%); /* Centers the button icon on the specified coordinates */
            border-radius: 20px;
            z-index: ${zIndex + 1}; /* Button is always above the overlay */
            background: ${buttonColor}; /* Dynamic button background */
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex; /* For centering the icon */
            align-items: center;
            justify-content: center;
          }
          
          .hamburger-button-${zIndex}:hover {
            transform: translate(-50%, -50%) scale(1.1); /* Scale effect on hover */
          }
          
          .hamburger-button-${zIndex}:focus {
            outline: 2px solid ${textColor}; /* Outline for accessibility */
            outline-offset: 2px;
          }
          
          /* Styles for the menu items container */
          .menu-items-${zIndex} {
            ${menuDirection === "horizontal" ? "display: flex; flex-wrap: wrap; gap: 1rem;" : ""} /* Horizontal layout if specified */
            ${menuAlignment === "center" ? "text-align: center;" : ""} /* Text alignment */
            ${menuAlignment === "right" ? "text-align: right;" : ""}
            padding: 2rem; /* Padding around menu items */
            width: 100%; /* Ensure it takes full width */
            max-height: 100vh; /* Allow scrolling if content is too long */
            overflow-y: auto;
          }
          
          /* Styles for individual menu items */
          .menu-item-${zIndex} {
            position: relative;
            list-style: none;
            padding: 0.75rem 0; /* Adjusted padding for underline space */
            cursor: pointer;
            transform: translateX(-200px); /* Initial state for slide-in animation */
            opacity: 0;
            transition: all 0.3s ease;
            font-family: ${fontFamily}; /* Dynamic font family */
            font-weight: ${fontWeight}; /* Dynamic font weight */
            color: ${textColor}; /* Dynamic text color */
            ${menuDirection === "horizontal" ? "display: inline-block; margin: 0 1rem;" : ""}
          }
          
          .menu-item-${zIndex}.visible {
            transform: translateX(0); /* Animate to visible state */
            opacity: 1;
          }

          /* Styles for the underline on hover and active states */
          .menu-item-${zIndex}::before {
            content: "";
            position: absolute;
            left: 50%; /* Center the pseudo-element horizontally */
            bottom: 0.25rem; /* Position at the bottom with some padding */
            transform: translateX(-50%); /* Correctly center the element */
            width: 0%; /* Start with no width */
            height: 2px; /* Thinner line */
            border-radius: 1px;
            background: ${textColor}; /* Use text color for the underline */
            opacity: 0; /* Hidden initially */
            transition: all 0.3s ease-out; /* Smooth transition for width and opacity */
            pointer-events: none;
          }
          
          .menu-item-${zIndex}:hover::before,
          .menu-item-${zIndex}.active::before { /* Apply to both hover and active */
            width: 80%; /* Expand width on hover/active */
            opacity: 1; /* Show on hover/active */
          }
          
          /* Styles for menu item text/icon container */
          .menu-item-${zIndex} span {
            opacity: 0.7;
            transition: opacity 0.25s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            justify-content: ${menuAlignment === "center" ? "center" : menuAlignment === "right" ? "flex-end" : "flex-start"}; /* Adjust content alignment */
          }
          
          .menu-item-${zIndex}:hover span,
          .menu-item-${zIndex}.active span { /* Full opacity for text on hover and active */
            opacity: 1;
          }
          
          .menu-item-${zIndex}:focus {
            outline: 2px solid ${textColor};
            outline-offset: 2px;
            border-radius: 4px;
          }
          
          /* Mobile responsiveness adjustments */
          @media (max-width: 768px) {
            .hamburger-button-${zIndex} {
              /* Adjust button position for mobile, typically top-right */
              left: calc(100vw - 30px); /* 30px from right edge */
              top: 30px; /* 30px from top edge */
            }
            
            .hamburger-overlay-${zIndex} {
              /* Match clip-path origin to mobile button position */
              clip-path: circle(0px at calc(100vw - 30px) 30px);
            }
            
            .hamburger-overlay-${zIndex}.open {
              clip-path: circle(150% at calc(100vw - 30px) 30px);
            }
            
            .menu-items-${zIndex} {
              padding: 1rem; /* Adjust padding for smaller screens */
              max-height: 80vh;
              overflow-y: auto;
            }
            
            .menu-item-${zIndex} {
              padding: 1rem 0;
            }
          }
          
          @media (max-width: 480px) {
            .menu-items-${zIndex} {
              ${menuDirection === "horizontal" ? "flex-direction: column; gap: 0;" : ""} /* Stack horizontally aligned items vertically on very small screens */
            }
            
            .menu-item-${zIndex} {
              ${menuDirection === "horizontal" ? "display: block; margin: 0;" : ""}
            }
          }
        `,
      }),
      // The actual overlay element
      _jsx("div", {
        ref: navRef,
        className: cn(`flex flex-col items-center justify-center h-full
            hamburger-overlay-${zIndex}`, isOpen && "open"), // Apply 'open' class when menu is open
        "aria-hidden": !isOpen, // Hide from accessibility tree when closed
        children: _jsx("ul", {
          className: cn(`mt-20 menu-items-${zIndex}`, menuDirection === "horizontal" && "flex flex-wrap "),
          children: items.map((item, index) => (
            _jsx("li", {
              className: cn(
                `menu-item-${zIndex}`,
                fontSizes[fontSize],
                isOpen && "visible",
                menuItemClassName,
                activeItem === item.label && "active" // Apply 'active' class based on prop
              ),
              style: {
                // Staggered animation delay for each menu item
                transitionDelay: isOpen ? `${index * staggerDelay}s` : "0s",
              },
              onClick: () => handleItemClick(item), // Click handler
              onKeyDown: (e) => {
                // Keyboard navigation for accessibility
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleItemClick(item);
                }
              },
              tabIndex: isOpen ? 0 : -1, // Make focusable only when open
              role: "button",
              "aria-label": `Navigate to ${item.label}`,
              children: _jsxs("span", {
                children: [item.icon && _jsx("span", { className: "menu-icon", children: item.icon }), item.label],
              }),
            }, index)
          ))
        })
      }),
      // The hamburger/close button
      _jsx("button", {
        className: cn(`hamburger-button-${zIndex}`, buttonSizes[buttonSize], buttonClassName),
        onClick: toggleMenu, // Toggle menu on click
        "aria-label": ariaLabel,
        "aria-expanded": isOpen, // ARIA attribute for current state
        "aria-controls": "navigation-menu", // ARIA attribute for controlling the menu
        children: customButton || (_jsxs("div", { // Render custom button if provided, otherwise default icons
          className: "relative w-full h-full flex items-center justify-center",
          children: [
            // Menu icon (visible when closed)
            _jsx(Menu, {
              className: cn("absolute transition-all duration-300", isOpen
                ? "opacity-0 rotate-45 scale-0"
                : "opacity-100 rotate-0 scale-100"),
              size: buttonSize === "sm" ? 16 : buttonSize === "md" ? 20 : 24,
              color: textColor,
            }),
            // Close icon (visible when open)
            _jsx(X, {
              className: cn("absolute transition-all duration-300", isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-45 scale-0"),
              size: buttonSize === "sm" ? 16 : buttonSize === "md" ? 20 : 24,
              color: textColor,
            })
          ]
        }))
      })
    ]
  });
};

export default HamburgerMenuOverlay;
