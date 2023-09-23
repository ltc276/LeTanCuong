import { Link, useNavigate } from "react-router-dom";
function Dashboard() {
    return (<h1> <Link to="/admin/menu" className="btn-btn-sm btn-succress btn-light">
        Về danh sách
    </Link></h1>);
}

export default Dashboard;