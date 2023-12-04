import SideBar from "../sidebar/sidebar"
import PropTypes from 'prop-types'
import './index.css'
function Structure({children}) {
  return (
    <div className="container">
            <div className="navbar">
                <SideBar />
            </div>

            <div className="content">
                <div className="searchbar">
                    <h1>search here?</h1>
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