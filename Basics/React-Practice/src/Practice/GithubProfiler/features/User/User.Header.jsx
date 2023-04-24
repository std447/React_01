import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
} from "reactstrap";

const HeaderComponent = () => {
  

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-teritiary border border-black">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              height="40"
              width="40"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Products
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>Option1</DropdownItem>
                  <DropdownItem>Option2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Solutions
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Open Source
                </DropdownToggle>
              </UncontrolledDropdown>
              <NavItem>
              <NavLink href="#">Pricing</NavLink>
            </NavItem>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
