import { Icon } from "@iconify/react";

function Toggle({ toggleMenu }) {
  return (
    <>
      <Icon
        icon="healthicons:ui-menu"
        width="30"
        height="30"
        className="text-white cursor-pointer"
        onClick={toggleMenu}
      />
    </>
  );
}

export default Toggle;