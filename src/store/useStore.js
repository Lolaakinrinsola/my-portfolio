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
const useStore = create((set,get) => ({
  isDarkMode: true, // Default is light mode
  space:'px-[15px] md:px-[5%] lg:px-[10%] dark:bg-dark bg-[#FAEBD7]',
  services:services,
  toggleTheme: () =>{ 
    const isDarkMode=get().isDarkMode
    set({ isDarkMode: !isDarkMode })},
}));

export default useStore;
