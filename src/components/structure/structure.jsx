import SideBar from "../sidebar/sidebar"
import PropTypes from 'prop-types'
import './index.css'
import SearchBar from "../searchbar/searchbar"

function Structure({children}) {
  return (
    <div className="container">
            <div className="navbar">
                <SideBar />
            </div>

            <div className="content">
                <div className="searchbar">
                    <SearchBar />
                </div>

                <div className="item">
                    {children}
                </div>
            </div>

        </div>
  )
}
Structure.propTypes = {
    children: PropTypes.node,
};
export default Structure