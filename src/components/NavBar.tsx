import { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../news-app-logo.png';

export default class NavBar
    extends Component<{ mode: string , toggleMode: any }> {
    render() {
        let {mode} = this.props
        return (
            <div>
                <nav className={`navbar navbar-expand-lg ${mode === "light" ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} height="70" alt='logo'/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/national">National</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/world">World</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/startup">Startup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/miscellaneous">Miscellaneous</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/hatke">Hatke</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/automobile">Automobile</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
