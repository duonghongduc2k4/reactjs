import './Register.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Detail(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useNavigate()
       
        async function getDetail() {

            const res = await axios.get(`http://localhost:8080/api/account`);
    
            console.log(res.data)
            setName(res.data.fullName)
            setEmail(res.data.email)
            setPhone(res.data.phone)
            setPassword(res.data.password)
            setConfirmPassword(res.data.confirmPassword)
    
        }
        useEffect(() => { 
            getDetail() 
        }, []);



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
                        <form >
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Họ và tên</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Địa chỉ email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Điện thoại</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Xác nhận mật khẩu</label>
                                <input type="password" className="form-control" id="exampleInputEmail1"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                />
                            </div>



                            <button type="submit" className="btn btn-warning">Đăng ký tài khoản</button>
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

export default Detail;