// Import Tailwind CSS styles
import "tailwindcss/tailwind.css";

// Import React and Next.js components
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../../public/next.svg';

// Define the Footer component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 px-4">
            <div className="container mx-auto px-20">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Giới thiệu</h3>
                        <ul className="text-sm">
                            <li>
                                <Link href="/about">
                                    Về Chúng Tôi
                                </Link>
                            </li>
                            <li>
                                <Link href="/products">
                                    Sản phẩm
                                </Link>
                            </li>
                            <li>
                                <Link href="/promotions">
                                    Khuyến mãi
                                </Link>
                            </li>
                            <li>
                                <Link href="/stories">
                                    Chuyện cà phê
                                </Link>
                            </li>
                            <li>
                                <Link href="/stores">
                                    Cửa Hàng
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers">
                                    Tuyển dụng
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Điều khoản</h3>
                        <ul className="text-sm">
                            <li>
                                <Link href="/terms">
                                    Điều khoản sử dụng
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy">
                                    Chính sách bảo mật thông tin
                                </Link>
                            </li>
                            <li>
                                <Link href="/invoice">
                                    Hướng dẫn xuất hóa đơn GTGT
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Liên hệ</h3>
                        <p className="text-sm">
                            Đặt hàng: 1800 6936
                            <br />
                            Tầng 3 -4 Hax Building
                            <br />
                            195 Đien Bien Phu, P15,
                            <br />
                            Q.Binh Thanh, TP.Hồ Chí Minh
                            <br />
                            Email: hi@thecoffeehouse.vn
                        </p>
                    </div>
                </div><div className="flex flex-wrap justify-between items-center mt-8 border-t border-gray-700 pt-4">
                    <div className="w-full md:w-1/2 text-sm">
                        Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN
                        <br />
                        Mã số DN: O312847172 do sở Kế hoạch và đầu tư TP.HCM cấp ngày 23/07/2014.
                        <br />
                        Người đại diện: NGÔ NGUYỄN KHA
                        <br />
                        Địa chỉ: B8 đường số Thao Dien ,phường O4 ,quận .TP Ho Chi Minh .
                        <br />
                        Điện thoại : (028)7107 8079
                        <br />
                        ©️2014 -2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN| moj
                        quyền bảo lưu
                    </div>
                    <div className="w-full md:w-1/2 flex justify-end items-center space-x-4">
                        <Link href="https://facebook.com/thecoffeehouse.vn">
                            <Image
                                src={logo}
                                alt="Facebook"
                                width={32}
                                height={32} />
                        </Link>
                        <Link href="https://instagram.com/thecoffeehouse.vn">
                            <Image
                                src={logo}
                                alt="Instagram"
                                width={32}
                                height={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Export the Footer component
export default Footer;
