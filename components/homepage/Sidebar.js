import * as s from './Sidebar.styles'
import { useState, useEffect } from 'react';

const Sidebar = (props) => {
    const {
        backgroundImage = '',
        sidebarHeader = {
            fullName: '',
            shortName: ''
        },
        menuItems=[],
        fonts={
            header:'',
            menu:''
        }
    } = props;

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);

//Effect
    // update of header state
    useEffect(() => {
        isSidebarOpen ? setTimeout(() =>setHeader(sidebarHeader.fullName), 200): setHeader(sidebarHeader.shortName);
    },[isSidebarOpen,sidebarHeader]);

    const handleMenuItemClick = (name) => {
        setSelectedMenuItem(name);
    }

    // Update of sidebar state
    useEffect(()=> {
        const updateWindowWidth = () => {
            if(window.innerWidth < 1280 && isSidebarOpen) setSidebarState(false);
            else setSidebarState(true);
        }

        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize',updateWindowWidth);
    },[isSidebarOpen]);
    const menuItemJSX = menuItems.map((item,index) =>{
        const isItemSelected = selected === item.name;

        const hasSubmenus = !!item.subMenuItems.length;

        const subMenuJSX = item.subMenuItems.map((subMenuItem,subMenuItemIndex) => {
            return (
                <s.SubMenuItem key={subMenuItemIndex}>
                    {subMenuItem.name}
                </s.SubMenuItem>
            )
        })


        return (
            <s.ItemContainer key={index} >
                <s.MenuItem 
                    font={fonts.menu}
                    selected={isItemSelected}
                    onClick={() => handleMenuItemClick(item.name)}
                    isSidebarOpen = {isSidebarOpen}
                >
                    <s.Icon src={item.icon} isSidebarOpen = {isSidebarOpen} />
                    <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                    {hasSubmenus && isSidebarOpen && (
                        <s.DropdownIcon selected={isItemSelected} />
                    )}
                </s.MenuItem>

                <s.SubMenuItemContainer isSidebarOpen = {isSidebarOpen}>
                    {subMenuJSX}
                </s.SubMenuItemContainer>
                
            </s.ItemContainer>

        )

        
    })


    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
             <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
             <s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>
             <s.TogglerContainer onClick={()=> setSidebarState(!isSidebarOpen)}>
                 <s.Toggler />
             </s.TogglerContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
