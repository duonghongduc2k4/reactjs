import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate()
    async function LoginAccount(e) {
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/api/account/login', {
            email: email,
            password: password,
        });
        if (res.data) {
            history('/register')
        }
    }


    return <>
        <div className="body">
            <header>
                <div className="container-header">
                    <div className="row">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <div className="topnav">
                                <div className="top_left">

                                </div>
                                <div className="top_right">
                                    <div className="topnav-right">
                                        <a href="/register">Đăng ký</a>
                                        <a href="/login">Đăng nhập</a>
                                        <a>Liên hệ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="content">
                <div className="rounded-content">
                    <div className='text-center'>
                        <div className='text'>
                            <h1>Đăng ký tài khoản (Miễn phí 100%)</h1>
                        </div>
                    </div>
                    <div className='container'>
                        <form onSubmit={LoginAccount}>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Địa chỉ email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>


                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-warning">Đăng nhập tài khoản</button>
                        </form>
                    </div>
                </div>
            </div>
            <br></br>
            <footer>
                <div className="rounded">
                    <a>Giới thiệu</a>
                    <a>Quy chế hoạt động</a>
                    <a>Chính sách bảo mật</a>
                    <a>Đăng ký doanh nghiệp</a>
                    <a>Quảng cáo</a>
                    <a>Liên hệ</a>
                </div>
                <div className="bottom">
                    <div className="sangiaodich">
                        <a>Đã đăng ký</a>
                    </div>
                    <div className="noidungchantrang">
                        <span class="fw500">CÔNG TY CỔ PHẦN SÓC ĐỎ</span>
                        <br></br>
                        <span class="fw500">Địa chỉ:</span>
                        Số 22, Liền kề 25 - Khu đô thị Vân Canh - Hoài Đức - Hà Nội
                    </div>
                    <br></br>
                    <span class="fw500">Điện Thoại:</span>
                    0943.051.818 -
                    <span class="fw500">E-mail:</span>
                    <a class="text-black-50" href="mailto:hotro.socdo@gmail.com">hotro.socdo@gmail.com</a>
                    <br></br>
                    <span class="text-black-50"><small>Copyright © 2024 Sóc đỏ. All rights reserved.</small></span>

                </div>
            </footer>
        </div>
    </>
}


export default Login;
