import Header from './Header'
import '../public/css/output.css'


const layoutStyle = {
    margin: 20,
    padding : 20,
    border: '1px solid #DDD'
}


const Layout = props => (
    <div>
        <Header/>
        {props.children}
    </div>
)

export default Layout