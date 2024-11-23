declare module "aos" {
    const AOS: {
      init: (options?: {
        duration?: number;
        delay?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
      }) => void;
      refresh: () => void;
    };
    export default AOS;
  }
  