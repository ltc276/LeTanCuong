import { Link, useNavigate, useParams } from "react-router-dom";
import userservice from "../../service/UserSevice";
import { useEffect, useState } from "react";

function UserUpdate() {
    const navigate = useNavigate();
    const { id } = useParams("id");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [roles, setRoles] = useState("");
    const [status, setStatus] = useState(1);
    const [categories, setCategories] = useState([]);
    useEffect(function () {
        (async function () {
            await userservice.getAll().then(function (result) {
                setCategories(result.data.data);
            });
        })();
    }, []);
    const [user, setUser] = useState([]);
    useEffect(
        function () {
            (async function () {
                await userservice.getById(id).then(function (result) {
                    setUser(result.data.data);
                });
            })();
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setUsername(user.username);
            setPassword(user.password);
            setAddress(user.address);
            setRoles(user.roles);
            setStatus(user.status);
        },
        [
            user.phone,
            user.address,
            user.roles,
            user.email,
            user.name,
            user.username,
            user.password,
            user.status,
            id,
        ]
    );
    async function userStore(event) {
        event.preventDefault();
        const image = document.querySelector("#image");
        var user = new FormData();
        user.append("name", name);
        user.append("email", email);
        user.append("phone", phone);
        user.append("username", username);
        user.append("password", password);
        user.append("address", address);
        user.append("roles", roles);
        user.append("status", status);
        await userservice.update(user, id).then(function (res) {
            alert(res.data.message);
            navigate("../../admin/user", { replace: true });
        });
    }
    return (
        <section className="mainList">
            <div className="wrapper">
                <div className="card1">
                    <form method="post" onSubmit={userStore}>
                        <div className="card-header">
                            <strong className="title1">THÊM DANH MỤC</strong>
                            <div className="button">
                                <Link to="/admin/user" className="backward">
                                    Go back
                                </Link>
                                <button type="submit" className="save">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="form-container grid -bottom-3  ">
                            <div className="grid__item large--three-quarters">
                                <fieldset className="input-container">
                                    <label htmlFor="name">Tên danh mục</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Nhập tên danh mục..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="input"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Nhập từ khóa..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="phone">phone</label>
                                    <textarea
                                        name="phone"
                                        className="input1textarea"
                                        id="name"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                            </div>
                            <div className="grid__item large--one-quarter">
                            <fieldset className="input-container">
                                    <label htmlFor="username">Username</label>
                                    <textarea
                                        name="username"
                                        className="input1textarea"
                                        id="name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="password">password</label>
                                    <textarea
                                        name="password"
                                        className="input1textarea"
                                        id="name"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="address">Address</label>
                                    <textarea
                                        name="address"
                                        className="input1textarea"
                                        id="name"
                                        value={password}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="roles">Roles</label>
                                    <textarea
                                        name="roles"
                                        className="input1textarea"
                                        id="name"
                                        value={password}
                                        onChange={(e) => setRoles(e.target.value)}
                                        placeholder="Nhập mô tả..."
                                    />
                                </fieldset>
                                <fieldset className="input-container">
                                    <label htmlFor="status">Tình trạng xuất bản</label>
                                    <select
                                        name="status"
                                        className="input"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option disabled>--Chọn tình trạng xuất bản--</option>
                                        <option value="1">Xuất bản</option>
                                        <option value="2">Không xuất bản</option>
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default UserUpdate;