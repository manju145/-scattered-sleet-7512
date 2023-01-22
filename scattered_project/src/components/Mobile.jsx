import React from "react";
import '../App.css';

function Mobile() {
    const redirect = () => {
        window.location.href = '/nextpage'
    }
    return (
        <>
            <h1 className="honename">Top Selling Brands</h1>
            <div className="Allfirstimg">
                <div className="forimg"> <img src="data:image/png;base64,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" alt="" /></div>
                <div className="forimg"> <img src="data:image/png;base64,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" alt="" /></div>
                <div className="forimg"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwYHEVjy6S91vWtABa4Pu6b8X_Hxs9bEXMA&usqp=CAU" alt="" /></div>
                <div className="forimg"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAn1BMVEX/////SgD/RwD/NQD/QgD/9/X/ZTD/+fb/mIP/9fH/YCn/l3b/SAD/dVX/9PL/jXX/VRf/7OT/bUn/5Nn/sKL/Uwr/ZzP/08H/cjX/YSH/m3P/xK//poz/7+j/mHf/tZX/Zyj/l2z/fkz/n33/XBP/dED/UwD/Wh3/vJ//3dH/rY3/ybf/hVb/jmH/f1X/pYH/hWn/ekr/XC//rJz/bkzqEXirAAAErUlEQVR4nO2dC1vaMBSGG8R1YNxAVi4iE7yAl7n7//9tUxFI0rS0p3U5p3yvj0gsFvv6NSe0NkRRjcSX4xvFkWS+GNW5oXUSj8aJ8+vqt0/jJhDJZNEJLcjP6EppbcipbMl2TW1tvjc5Dy3IS/9avUoLmakctLphuZ9Ob1uh1eSi1SIO7cjDxZJpzrYsj0M78vCxHVrLPo6gjQK0kYA2Ely1+WqCM6R6Hdk93+i3m+0du6XU5oGplsptOT8iQhtzJGmz/+CZ8XLDpjY52sW1UEvbLbHaGAFtJLhqyywJuxalJCiUhJBI0oaSkA/SRgLaSJTSpgu3akS+tiBAGwkJ2hieVJCgjSHytWWcoXvf06nytQUB2khAGwloIyFfG0rCBqSNBIa7JJA2ElX7NuVv1Yh8bUGANhIStKEkFCOljQfGmFCGNi7itsjRxuc/7JUkbayANhIytPEAJaEqcrShJOwDaSOR37fpFh29/h8kL6n15vyxZGgzN0D3hh+odLurXvYO7jx4mGR7k6etfRLFNDqzwejufLz0m2h1Z/bDo9PsC+YEavtaZdXxcef+YX7kyVGr615c2yxtJ1VX3xlMl+kuroHaTKprexb3+C1xnezXJnq4W4e2KBotJo6UBqbNHO7Woy26P1/ZVhqqrd60RdHg2u7foK0Y/YXlrYHaTGrTFg3G5qoLloT1HRna3iVtUfzYK6VNXNreoSS8MHsyvDVUW/1pe47bsNHaTGrUFnW+71Z+cH3bYC/9fsZkTj+6JbSJS1uutk9HmVv3RjK/upx5p9eZnm3VHJ42vQ+V9LoPfc8zDU4PWNu+tL1ehLx68kyD1fm5faoGajMhaXvRkvi8fS6hrVlHQApqU62bk1nqqcpoM5CjLXO4W1Sbag3vUk/VeG0b6Nq0+pUah0DbflrdqTsMabQ2kwradC81h2npkrC+I0NbTWnT6tYtCo1OW4mSoNsOVlYnB6dtQ742/fuLzZ+V8cN65b5UgLb1xv91V/bB2HjdOyBtNnu0nTlL44PVVipt0AZt5YA2EtBGAiWBBM+0vf4aev0BbUgbtEFbeVASSPBMm96cg0FJQNqgDX0bCZ5pM6dogTakDdqgrTwoCSR4pg1HQHY0L21GwYe2IiBtJFASSPBMG46A7EDaoA19GwWeaUPftgNpgzZoo4CSQIJn2nAEZEfz0pZ1BMSdUQva3ig3f9vM0eYstbUNnDnaTG0Nm7/NJj1boLl1WrlL7WuPus6MgD0j042eLTA9h6TKXWpve87SwnNTijxPygJoIyFBG0MkaGOSNtlHQFgAbSSgjYQEbQyRoI1J2mQfAWEBY20ZR0BYwFjbVhy0FQMlgQT6NhLQRgLaSKBvI8EzbRjuVgbaSEAbCQnaGCJBG5O0oSRUBtpIsNamrS+cYK2NLxK0YSctBrSRgDYS6NtI8EwbhruVkaCNIdBGQro2421tlHVGWr3rqwtoIyFdWyCgjYR0bdrfwk6aT6C+rc1R28Wy8BYHStuSo7bpbfZFYjxYeN+2MzD9a34vpwy0uvG8iSIDRldFvQXp2ybnoQX5iUfjpNgWBNCWTFLvzcaG+LKouP9MMl/Uu4f+Azjbt+DL25CiAAAAAElFTkSuQmCC" alt="" /></div>
                <div className="forimg"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqUg2ujPjnJMag5ESy7FuPjvUMoF42BRQTg&usqp=CAU" alt="" /></div>
                <div className="forimg"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX////rACjtACH+8vXwTl3qACT7z9j9L0j60tn2AAjyABb5lqT/+/ztABn0h5L0ACXzJkv6AC/0AB7ycIH5cID4tb/2mKj7ABjtAA74ABz0gZL4dIfySlr6wcjyQlPvAAD5AAD6x9L+5+30c3/sFjL5PlH7rbf+Mkv8oq/8r7j8anv6kKD9vcfwVGj1kZrxZnX0GkT5h5qP3M0XAAACnUlEQVR4nO3b0XaaUBBAUZBo1GhtjWhMjMG0NY21bfr/P9dXZcCrAxfn0nOeGYcNyxdYRFFg9QbxYZ2b5NpnVHcIww9h+CEMP4ThhzD8EIYfwvBDGH4Iww9h+CEMP4ThhzD8EIZf+4X9i4XJVSo/n5FjcpMXvrpW3Vyh1ddy4vP69Oy6cySMv60cy6LOFRqvyoXpi2M4zuVaFuUHmujUnyd9qHkZQi8hrDWEXkJYawi9hLDWEHoJYa3lhd3hwH/Z93LhNjs9O8xfLdeynLB7u+01UL8UGCWOye3iGLjeOHblhW8nlptIPMUYuSby99C68PInUQithVCG0FoIZQithVCG0FoIZQithVCG0FoIZQithVCG0FoIZQithVCG0Fq97OGwl7Vv4ejH7P6cZnstKVfynh72/uz77VqyG0zPKfupJVWuqnA2js9peOfn9M8IoSOECBsIoSOECBsIoSOECBuoqnCXLQqbtEU42t/NC/vVaYmwtN/jlgtHnxA2FkJlCBsMoTJvwtenx6Pm1/oawZtwky0PW3h/5l2WN6GZ9xYI1SGUIVSGUB1CGUJlCNUhlCFUhlAdQhlCZQjVIZQhVIZQHUIZQmUI1SGUIVSGUB1CGUJlCNUhlCFUhlAdQhlCZQjVIZQhVIZQHUIZQmUI1SGUIdSWF85r+t3GhaNeWtyf4+8Pp/f74uMuvaKNC5PZ5Ethcb7iw6ZP9oXnfQdc1rL1wvbfQ4QIESJEiBAhQoSNCHfLSZUWM/PCx4/PVfr4a13YeAhlCK2FUIbQWghlCK2FUIbQWghlCK2FUIbQWghlCK2FUIbQWghlCK2FUPbfCd+sC/uV72Hat126qCaM41vrdasKu9aLqwoDCyFC+yFEaD+ECO2HEKH9EEbRP8CepTuxuD2kAAAAAElFTkSuQmCC" alt="" /></div>
            </div>

            <h1 className="honeheading">Shop By Choice</h1>
            <div className="Allfirsdiv">
                <div className="Allphoneimg">
                    <div className="imgehere">
                        <img src="https://teja8.kuikr.com/i4/20230105/Call-Me-86012-29838-iPHONE-7-PLUS-128GB--ALL-ACCESSORIES---BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP975329511-1672919594.jpeg" />
                        <h1 className="price">₹5,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja9.kuikr.com/i5/20230103/Call-Me-86012-29838-iPHONE-7-PLUS-128GB--ALL-ACCESSORIES---BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP1588103734-1672747517.jpeg" />
                        <h1 className="price">₹5,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja9.kuikr.com/i5/20230103/Call-Me-86012-29838-iPHONE-7-PLUS-128GB--ALL-ACCESSORIES---BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP1588103734-1672747517.jpeg" />
                        <h1 className="price">₹5,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja9.kuikr.com/i5/20230103/Call-Me-86012-29838-iPHONE-7-PLUS-128GB--ALL-ACCESSORIES---BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP1588103734-1672747517.jpeg" />
                        <h1 className="price">₹5,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja9.kuikr.com/i5/20230103/Call-Me-86012-29838-iPHONE-7-PLUS-128GB--ALL-ACCESSORIES---BILL-BOX-AVAILABLE-VB201705171774173-ak_LWBP1588103734-1672747517.jpeg" />
                        <h1 className="price">₹5,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                </div>
            </div>

            <div className="Allsecsdiv">
                <h3 className="homesecpage">Trending mobile phones</h3>
                <div className="Allsecimg">
                    <div className="imgehere">
                        <img src="https://teja10.kuikr.com/i6/20230113/Agrima-port-charger-for-Sale-VB201705171774173-ak_LWBP1492607963-1673580200.jpeg" />
                        <h1 className="price">299</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja8.kuikr.com/i6/20230116/Neat-and-mint-condition-VB201705171774173-ak_WBP1862568392-1673846231.png" />
                        <h1 className="price">₹2,599</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja9.kuikr.com/i5/20230120/Airpods-Pro-with-Original-Iphone-Fast-Charger-VB201705171774173-ak_LWBP1384316089-1674208431.jpeg" />
                        <h1 className="price">₹8,999</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja10.kuikr.com/i4/20230120/boat-rockerz-558-I-have-bill-with-1-year-warranty-VB201705171774173-ak_LWBP1906157166-1674230113.png" />
                        <h1 className="price">₹2,000</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                    <div className="imgehere">
                        <img src="https://teja10.kuikr.com/i6/20230121/Boat-Airpods-201--With-Active---Environmental-Noise-Cancellation--VB201705171774173-ak_LWBP243806591-1674298812.png" />
                        <h1 className="price">₹1,599</h1>
                        <button className="buttn" onClick={redirect}>View</button>
                    </div>
                </div>
            </div>

            
            <div className="cust">
            <h1 className="hone">User reviews From our happy customers</h1>
            <div className="thery">
                <div className="boxfirst">
                    <h1>Zaim Abbas</h1>
                    <p className="theryptag">
                        Quikr is superb.. Nice product, Nice condition,got original as listed on Quikr.
                        It's my second purchase through Quikr and I am 100% satisfied ....... Thanks to Quikrrr.
                        ...</p>
                </div>
                <div className="boxsec">
                    <h1>Vikram Pareek</h1>
                    <p className="theryptag">
                        Awesome experience, process was so perfect that no one need to worry about meeting buyer or courier or any kind of security issue. Let me tell you that I had words with buyer only once on call and Quikr did everything for me. Thanks Quikr for making life so easy for us. Thanks a lot. I will surely share this awesome experience with everyone.
                        ...</p>
                </div>
            </div>
            </div>
            {/* Footer here start */}
            <div className="footermainbox">
                <div className="firstdiv">
                    <div className="allhone">
                        <a href="https://www.quikr.com/html/about.php"> <h1>About Us</h1></a>
                        <a href="https://chandigarh.quikr.com/html/contact.php">  <h1>Contact Us</h1></a>
                        <a href="https://chandigarh.quikr.com/html/jobs.php"> <h1>Careers</h1></a>
                        <a href="https://chandigarh.quikr.com/video?id=vhS7M5IdOpI"> <h1>Quikr Videos</h1></a>
                        <a href="https://chandigarh.quikr.com/adsales"><h1>Advertise With Us</h1></a>
                        <a href="http://blog.quikr.com/"> <h1>Blog</h1></a>
                        <a href="https://navimumbai.quikr.com/help/"><h1> Help</h1></a>
                    </div>
                    <p className="ptag">Widely known as India's no. 1 online classifieds platform, Quikr is all about you.
                        Our aim is to empower every person in the country to independently connect with buyers and sellers online.
                        We care about you — and the transactions that bring you closer to your dreams. Want to buy your first car?
                        We're here for you. Want to sell commercial property to buy your dream home? We're here for you. Whatever job you've got,
                        we promise to get it done.
                    </p>
                    <div className="allsechone">
                        <a href="https://kolkata.quikr.com/html/policies.php#listing-policy"><h1>Listing Policy</h1></a>
                        <a href="https://mumbai.quikr.com/html/termsandconditions.php"> <h1>Terms of Use</h1></a>
                        <a href="https://kolkata.quikr.com/html/policies.php#privacy-policy"><h1>Privacy Policy</h1></a>
                        <a href="https://kolkata.quikr.com/html/policies.php#quikrX-policy"><h1>Quikr Mobiles Policy</h1></a>
                        <a href="https://www.quikr.com/html/brand_guidelines.php"> <h1> Quikr Brand Guidelines</h1></a>
                        <a href="https://chandigarh.quikr.com/Chandigarh-sitemap.php"> <h1>Sitemap</h1></a>
                        <a href="http://news.quikr.com/"><h1>News</h1></a>
                    </div>

                    <div className="allhone">  Other Brands:
                        <a href="https://www.commonfloor.com/"> <h1>Commonfloor</h1></a>
                        <a href="https://www.quikr.com/jobs/?utm_source=hiree.com&utm_medium=redirects&utm_campaign=domains"><h1>Hiree</h1></a>
                        <a href="http://www.dazzlr.in/"> <h1>Dazzlr</h1></a>
                        <a href="https://www.realtycompass.com/"><h1>Realty Compass</h1></a>
                        <a href="about:blank"><h1>Zefo</h1></a>
                    </div>
                </div>

                <div className="secdiv">
                    <div className="hcdiv">
                        <div >
                            <a href="https://www.quikr.com/ahmedabad"> <h1>Ahmedabad</h1></a>
                            <a href="https://www.quikr.com/bangalore"><h1>Bangalore</h1></a>
                            <a href="https://www.quikr.com/chandigarh"> <h1>Chandigarh</h1></a>
                            <a href="https://www.quikr.com/chennai"><h1>Chennai</h1></a>
                            <a href="https://www.quikr.com/coimbatore"> <h1>Coimbatore</h1></a>
                            <a href="https://www.quikr.com/all-cities"><h1>All Cities</h1></a>
                        </div>

                        <div>
                            <a href="https://www.quikr.com/delhi"> <h1>Delhi</h1></a>
                            <a href="https://www.quikr.com/gurgaon"> <h1>Gurgaon</h1></a>
                            <a href="https://www.quikr.com/hyderabad"> <h1>Hyderabad</h1></a>
                            <a href="https://www.quikr.com/jaipur"> <h1>Jaipur</h1></a>
                            <a href="https://www.quikr.com/kochi"><h1>Kochi</h1></a>
                        </div>

                        <div>
                            <a href="https://www.quikr.com/kolkata"><h1>Kolkata</h1></a>
                            <a href="https://www.quikr.com/lucknow"> <h1>Lucknow</h1></a>
                            <a href="https://www.quikr.com/mumbai"><h1>Mumbai</h1></a>
                            <a href="https://www.quikr.com/pune"> <h1>Pune</h1></a>
                            <a href="https://www.quikr.com/trivandrum"> <h1>Trivandrum</h1></a>
                        </div>
                    </div>

                    <div className="allsocialtag">Follow Us
                        <a href="https://www.facebook.com/QuikrFans">
                            <img src="data:image/png;base64,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" alt="" /></a>
                        <a href="https://plus.google.com/108295975916565007121?prsrc=3">
                            <img src="data:image/png;base64,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" alt="" /></a>
                        <a href="https://twitter.com/quikr">
                            <img src="data:image/jpeg;base64,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" alt="" /></a>
                        <a href="https://www.linkedin.com/company/quikr/">
                            <img src="data:image/png;base64,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" alt="" /></a>
                        <a href="https://www.youtube.com/channel/pLtpHTmLXwgNMA_OXvOQew">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAyVBMVEX///8AAADBIibbKyjfLSjEIybXKifSKCetra3OJycsLCz++fnt7e1zc3P0yMjd3d3rMCjljYzvubn09PTLAAD62tn409HvpaT54eDTNjXKyso/Pz+FhYV7e3tTU1Onp6faEgzXSUn76enmm5vDAAC+CBDjqqvQGRjda2vIOTvU1NTIGBrhnZ7nIxreJR+8vLzkYF1dXV2VlZURERHyl5TtfXruWFXsTkrtRkDsPTfnamjmEgHwiYbgOjbhS0kjIyPgeXnTV1jNXmBTnFMRAAADx0lEQVRoge2YbXeaMBSAQwUsxuoEVGi7FhCLiKJop9atnfr/f9TujdSyVjvjsR92zn0+SCCRJ683AGMEQRAEQRAEQRAEQRAEQRAEcSqcB4HjOM1ms1UATuFiEHD+debm44/leDabLxaLp6enb0XgfLGYz2fj5Y/H5le4g+XP4TAF1INg7nD4cxycXz4bHta+q8T87PpH71i5qg5/nVkeLFTV21Fop+ftGwpH6uaTLLvHY5Zlo70Faqk6b7/SeS7lpON2u5eW3pOacnZFuakydq0oSnVvgcc0He9O+Iuaa7wGY+099oaUvQ/auqjE3f4CS7DvFnOws6cH7GO5hV9RlHtmZYoy2Z//oqov0OcwmVt/9TzYOx/t6kzOfoutrkMP9PfnqyW9BNOtBjLb80Cg6/gTCXsUqTpSiqKoJBLPcnbo+t/WSFEqkK6ORnW8ZvX7UJd6vw9TwRO3j9Ae6c+u6+o6/qC9bb/0/AhzI783NjClq3L26o2iXF8pyncx+NARYISumDJ2hWPCC3bPBqVpu03OfUw22vD/VaRHLuSy4Bfoy6lkvIGun2AN2L0iyCy0V4T9knG70Pbc7rCtXYicsm7ki7wX6WVP0o69PsVlB1XIJmICFOyBV0b22nkHG+/jIAQNKNC0y2VbNtaKFt+y+lSpVFE5OdbesdG1tCHCrGw3gPWol225YMfYHdpHGHCgA25xBhTt9if2yIZNtWe3sNONgPH1CfZLtLNj7OFhu11GeyJvr0PAyQ7bjYP2wZud48MN2A1pu3WHS+uwHflgD9/sYSu/EV+eYGdH26ODdrODxOWvsSfC3kV7WLCHr/ZeGNm2nRiG9Ir71M6LdtH2MN7Zkzd7YgzMBx866ax2Fn2wuwW782rvujjnoaD0o/XW/j7aWDfCbnywb3hu74QhtHQTQl4jxGgDbXdPtONOf7WLtNMJnKI9NjRA2Ls47kEH15aw88ED/G0tkhhpnUQz/FPtl2+7zBSOvyvCvk5e7YNussLiTpDbxRAHrqblrxGNrpaspe03W/tWD3Kx71X634V9lds5tF1zYYhrMe6wYOedBt8qY7HDQkrb1k8Ky7K2ierosr5N9a+t/LLZRbsWx/EFHC42awPTkIIL3Xjjbyvnb9YxFkwepO2f4rhakST5+/TddePc73Kr5OJoks2Z5cwxtGPl5286PLLEYXJEBTStq7X+fTdpuLla+7GLQae7B4jumhv7683g/C/QeQUCB79Z1Gqm+YAMEEyYZq2GnzDw+8UXuQmCIAiCIAiCIAiCIAiCIIj/nT8WuYZq0l18ngAAAABJRU5ErkJggg==" alt="" /></a>
                    </div>

                    <div className="allsocialtag">Follow Us
                        <a href="https://apps.apple.com/in/app/quikr-free-local-classifieds/id632051273">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEX///8AAADv7+/39/f7+/tzc3OlpaXq6uqTk5Pz8/Pf399AQEB+fn7j4+PFxcXQ0NCurq5OTk4lJSWenp5JSUmKioq1tbVpaWlbW1sqKipgYGDX19e8vLwTExOEhIQcHBw5OTkyMjJgs7i6AAADlUlEQVRoge2b2XqCMBCFiWFRUEBARATR93/Jqm2tEjAnMhNueq798ptlMksGx/kXrdyFnAsdpF6V+bOg3bwQN+1mYG/W4kf26cGDLcTSNrzs/uDC8r6vPPGs2Co8uLzARWgTHr6yxWVhEb7pwcXeInzR9ekWD51b9eHC4sIvFbhnD54ocHG0R78o8K09eDrr1FX42h5cnfrBYmRRzLnuyi0nUntw1datOva6B7d4z1wdazYjvO9ZLcdT8Qu8tAt/sfZoYxnu+A92N0P+8KD7K/vw+8p39TJhhcgwafw8T+Njb4qulNJ9/uExzr3ikJ3rtR+HFBd+4FfRI3A7V/lmbNCg2UfPJtBG+zSYhJapGrRtdwOne1XulR/eVJeu+mNQu8ERr9bVO2WNN/LDq7L8M7Y/PuR1BX5XVcbrd7+7qTFnJ5FmzDZaxklZKcH8gGrT/X87cWMdjNJKV7uapjJZffWkTxYc9Li6LWfFbzngaEnhjfFOUoec/JIJLvZAaqsGyUSCTj3TpkdQBDCQFVKoRtjO4sACBzNLtRBBITDOlyxwtJyQc8AzNMDggMM59UAFaLrg5O7EAG/R4p2b6QczFpxaclyyHZzecZx4vGDM4VrhgE4yOJgWjmaDlp6OeZeb+i8MFDrB9Fg/mLHw8h2Ha8dTew6Dw4s5HPcsnsBxmDv+QsNBx+c+XH2YJnzfOeaOn3nyrFmYVE/HqjRThLcBzOtgOdJH/DWaJaaEH4lYsld44zn8uzij1VqpPq4RCC5WcVx2IkLpHAaPT75hoQuQvuChg6UDlkxKwGvPVanDrhymkpE4QG4+YKKLDrruuehYkMNTsroLOHosbu5HJ/2Nz2Rzd5212TRHRvGnWmN6R1a6torDVKL+labpkOvC+dZWU7ZUW/Uope0R4MgpHtI+EbDdtgLytSzx1beARlc+o4Pq9GxGB1UOuS77AoGz7TyYy3OUDQ3SWRY3D3d2ry70cIPPCeiLpq1J7w95bG3Wz0+cTRv2tNOu/cG0B400oTX/joKw9eODhku6OKMyh9NtfftZ4yFRt9OnrYckVv9hh5tD4uontNO7k/H4k9iAVhP7vSbBHUeO7X1b7PMmCcOkXNajV8P07+SGAvy2bp7dtTz6g3+AosFYKeNd0gELDpWQpCD6Uux54Gg5WgR56e+s6L6Rc1OvyNrL1vPfP3G5Yb6ut0Xl5dP6eBXJIFhgjTOv3c3/GtQXGkQ2kZDIWdgAAAAASUVORK5CYII=" alt="" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.quikr&referrer=utm_source%3Dwebsite%26utm_medium%3Dwebsite">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPUwVELO7rPL45eKAu-UDMQYSx7EjMgClCp1_SJfz&s" alt="" /></a>
                        <a href="https://www.microsoft.com/en-US/p/Quikr-Buy-Sell/9WZDNCRCWNK5?activetab=pivot:overviewtab">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAB1CAMAAACBMwhyAAAAolBMVEX///9/ugDyUCIBpO//uQFxcXH/twBsbGz6+vppaWn3++z/9/Pt9eB6uADQ5Ljb6sr/1IwAoO7xSCp4tiD2kYPyRQz70syMyPUzpu+BwPT/9eD/tAj947j/y3vzZENyswja2tqcnJzBwcGJiYl5eXnn5+ddXV2pqanLy8u1tbWBgYGUlJTw8PDzX0nxPx32kYvzXDj94Nuv1vf/+Ov+7dFISEgKqruMAAAEcklEQVR4nO2aCbPbJhDH1WMDpE3vtE3TNgiBOETv5vt/te4CkmWnljWOlXSm+59M3hOC5edlD8bzuo7FYrFYLNY70Cdbkjjh6ZbkkWi/fHVdv/7WdZ9+vaFXnx2J9vOH1/X8G0R79cF1PWM0RmM0RmM0RmM0RmM0RmM0RmM0RmO0/zXa7883VNCebehQtG+39EfXyc+39PRINNY9+m5Lf3bdX19s6e8j0b7/ckMvuu6Hl0+u6+WPh6J9dF0V7ePresJojMZojMZojMZojMZojMZojMZojMZox6Ntfa/wnr9YeLEl+jrmpy0d+nUMi8Vi/TfkXH6EGekeYWWlHNU4vjY7Z/fe+16vRzQO9ZF+sWJ67F/WDgJAjGHnbIFS09l6hSM9/jIJ2G1ml6ICkaLfaxNIanX+ecQBUdAUjPqBZNICVCc4M/idaCKeBryY0XKf9obFLjl0WvGYHJTah5bw3xJTOYFNFe3RcngeuqLBPjQVLCg9PxslvD8GLaPX6j670XQvxJIIuMr1Fc2ZEJo3XZwsDB4NSxOM65yfiu0c+iSG3syxKnWf6rz65AdhJ0M1SIYQMVRiQJkBgy4Ec6M2kde0AtumaYAB/V3QzKigoEkvFEUgPUqlRqNBiIQvQirjQtkalHnC7MbHVG0N7S1gKMt5KqmknrqV/jjbyASqJUIvlOlmNAGW0NAqwAhJKXyUtADDmLbHYgBKWNqqrJdYt1Qa7DiQqUDDqr7tMT1HVYBOaK93oGGAgahHoEBJeYGG9U30TkoZpoJGCRyML3snTeO0k6swgZqIx2UOnWQDvtWJTgY7lMYR41CaNsAfN1pWQcMArYmASdB3F2h43HNW4JNcag1OA6jWtShTvMJomA33ouVjlwHKOGZoTYPdGYpoZKeva3DxBRo6LZ0+n2z7FGQ11z1cbzMdsNVtJFsQ8/Y4Tk69Dw2jX+Sy29RdoFFwrezIpUDT8c05Forb6cSgZatetRJXTvRONKoZsSRBuERrdldozVexeKoKoRBNThTytqfRgBwzOHqQrN+Jhh87SaSgzXai9Ss0J2qwRqwUUD6fWfn07dAoNLQR5egu0MQppM7QzKkaNq+RnWipNLhyxPNbZ9/mQLGrizhVa2/EGqza1gktqFN/owRoHsy+VDmCnZ0dKvi9aHgXwiAeujfQVlXgHM3BqdWm+bpDmmgcrwnVWlcsUI7fi9ZRlVLhX9Aw11pNkEau0GjHVuHIUTjDLBvHem/0pcrEVmXWaEC97MYVekFDr7f6ddkNyg2uj8YnOENzVH0HGhdQrsVeTUaHqbYG6loieRPLz26NVixOcb4FXEdrO50aKX3sNRpVeep52LnP0DBDSj4KqPNpHjZIvLYXOzktb4d8jkY3N1C3rtA22Rat0bZIllOyBc2mdsVET1BTHsoNItklYWVMdJWAqW4ShjqtGZTm/NlBmpsFXllQN9CyzO3IZV5uXXUM/19GstbayfMF5cnhi6WNSezZevVaumVZszf/ntcvWCwWi8Va9A+4LNKQNfvrjgAAAABJRU5ErkJggg==" alt="" /></a>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Mobile;