import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const [anchorMyAccont, setAnchorMyAccont] = useState(null);
  const openMyAcc = Boolean(anchorMyAccont);

  const handleClickMyAcc = (event) => {
    setAnchorMyAccont(event.currentTarget);
  };

  const handleCloseMyAcc = () => {
    setAnchorMyAccont(null);
  };

  return (
    <>
      <header className="w-full pr-7 shadow-md !py-3 h-auto pl-64 flex items-center justify-between bg-white ">
        {/* Menu Button */}
        <div className="menu-section">
          <Button className="w-[40px] h-[40px] min-w-[40px] rounded-full">
            <RiMenu2Line className="text-[20px] text-[rgba(0,0,0,0.8)] font-[600]" />
          </Button>
        </div>

        {/* Notification & Profile */}
        <div className="cart-section w-[40%] text-[rgba(0,0,0,0.8)] flex items-center justify-end !gap-5">
          
          {/* Notification Bell */}
          <IconButton aria-label="notifications">
            <StyledBadge badgeContent={4} color="secondary">
              <FaRegBell className="text-[20px] text-[rgba(0,0,0,0.8)] font-[600]" />
            </StyledBadge>
          </IconButton>

          {/* Profile Image */}
          <div 
            className="rounded-full w-[30px] h-[30px] overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocILWDoCAl3nlh1EqOefM1H0HQck_GiGJRhB9tGoVpeat84Bvw=s96-c"
              className="w-full h-full object-cover"
              alt="User Profile"
            />
          </div>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorMyAccont}
            id="account-menu"
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleCloseMyAcc} className="!bg-white ">
            <div className="flex items-center !gap-3">
            <div 
            className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
            onClick={handleClickMyAcc}
          >
            <img
              src="https://lh3.googleusercontent.com/a/ACg8ocILWDoCAl3nlh1EqOefM1H0HQck_GiGJRhB9tGoVpeat84Bvw=s96-c"
              className="w-full h-full object-cover"
              alt="User Profile"
            />
          
              </div>
              <div className="info">
                <h3 className="text-[16px] font-[500] !leading-5">Bhoi Roshni</h3>
                <p className="text-[12px] !opacity-70 font-[400]">roshnibhoi@gmail.com</p>
              </div>
              </div>
              </MenuItem>
              <Divider/>
              <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3 !ml-2">
              < FaRegUser className="text-[16px]" /> <span className="text-[14px]">My account</span>
              </MenuItem>
               <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3 !ml-2">
              < PiSignOutBold   className="text-[16px]"/> <span className="text-[14px]">Sign Out</span>
              </MenuItem>
          </Menu>
        </div>
      </header>
    </>
  );
}

export default Header;
