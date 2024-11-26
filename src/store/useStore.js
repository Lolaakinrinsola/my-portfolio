import { create } from 'zustand';
const services = [
  "Development",
  "Design",
  "Prototyping",
  "Optimization",
  "Testing",
  "Consulting",
  "Maintenance",
  "Integration",
  "Deployment",
  "Debugging",
];

// Initialize the theme from localStorage or default to light mode
const getInitialDarkMode = () => {
  const storedTheme = localStorage.getItem('isDarkMode');
  return storedTheme ? JSON.parse(storedTheme) : false; // Default is false (light mode)
};

const useStore = create((set, get) => ({
  isDarkMode: getInitialDarkMode(),
  space: 'px-[15px] md:px-[5%] lg:px-[10%] ',
  services: services,
  toggleTheme: () => {
    const currentMode = get().isDarkMode;
    const newMode = !currentMode;
    set({ isDarkMode: newMode });
    localStorage.setItem('isDarkMode', JSON.stringify(newMode)); // Sync with localStorage
  },
}));

export default useStore;
