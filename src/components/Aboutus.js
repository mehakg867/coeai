import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Navigation from '../container/Navigation';
import '../App.css';
import Fade from 'react-reveal/Fade';
import './Aboutus.css';
import { Bounce, Slide, Zoom } from 'react-reveal';
import ssaggarwal from"../images/ssaggarwal.jpg";
import Shambhu from"../images/Shambhu.jpg";


function Aboutus() {
    return (
        <Zoom>
        <div>
        <Navigation/>
         <section id="about" className="about-section pt-150">
<div className="container">
<div className="row">
<div className="col-lg-6">
    <Fade top>
<div className="about-img mb-50">
<img src="https://preview.uideck.com/items/bliss/assets/img/about/about-img.svg" alt="about"></img>
</div>
</Fade>
</div>
<div className="col-lg-6">
<div className="about-content mb-50">
<div className="section-title mb-50">
    <Fade left>
<h1 className="mb-25">ABOUT
COE - AI</h1>
</Fade>
<Zoom>
<p className='aboutcoe'>IGDTUW has established COE in Artificial Intelligence with the support of the
Department of Science and Technology, GOI. Under the magnanimous leadership
of Dr. (Mrs.) Amita Dev, avant-garde and state of the art infrastructure with
computing facilities/Research Centers with modern AI-enabled infrastructure
facilities to enhance functional efficiency for Teaching, Research, and
Innovation purposes are being created under COE.
</p>
<p className='aboutcoe'>It will Encourage, Engage and Involve student innovators, young research
scholars, and faculty members to have heuristic knowledge on AI-based
Technologies, Design and develop intuitive technological solutions and produce
good quality research in the AI-related areas of projects, and benefit the most
fromAI in solving industrial and societal needs.</p>

<p className='aboutcoe'>The Centre serves as the perfect platform with the necessary hardware and
software infrastructure to serve as a playground for the creative minds that
solve real data driven problems at hand.</p>

<p className='aboutcoe'>The COE-Ai at IGDTUW, caters to the requirements of Undergraduate, Post-graduate, and Doctorate programs in the domains of AI, Machine Learning,
and Deep Learning and various applications including Robotics, Drones, NLP,
and others. it organizes various workshops, seminars, conferences, industry
talks, hackathons on a regular basis.
</p>
</Zoom>
</div>
</div>
</div>
</div>
</div>
</section>
<div className='teams'>
    <Slide left>
<h1 className="mb-25">MEET THE TEAM</h1>
</Slide>
<Bounce>
<div className="row justify-content-center">
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img className="img1"src="https://www.igdtuw.ac.in/images/vcmadam1.png" alt=""></img>
</div>
<div className="content">
<h3>Dr.(Mrs.) AmitaDev</h3>
<p>Hon'ble Vice Chancellor, IGDTUW
</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img className="img1"src="https://www.igdtuw.ac.in/uploads/Ranu-pic-recent.jpg" alt=""></img>
</div>
<div className="content">
<h3>Dr. Ranu Gadi</h3>
<p>Nodal Officer, DST CURIE
COE AI Phase - II</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img className="img1" src={ssaggarwal} alt="this is college logo" ></img>
</div>
<div className="content">
<h3>Dr. SS Agrawal</h3>
<p>Advisor, COE AI</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img  className="img1" src="https://www.anveshanfoundation.org/images/arun.png" alt=""></img>
</div>
<div className="content">
<h3>Dr. Arun Sharma</h3>
<p>Coordinator COE- AI</p>
</div>
</div>
</div>
</div>
</Bounce>
<Bounce>
<div className="row justify-content-center">
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img className="img1" src="https://www.indcareer.com/files/faculity-images/74305/dr.-poonam-bansal.jpg" alt=""></img>
</div>
<div className="content">
<h3>Dr. Poonam Bansal
</h3>
<p>Co- Coordinator, COE-AI</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img  className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5VOVaLAbq19Smdc1Rw8Oo9n0dJRZkoeQ5UXphZlTg_Kp6UWcu_j4g0cqHizgblxFpKE&usqp=CAU" alt=""></img>
</div>
<div className="content">
<h3>Dr. Ritu Jangra</h3>
<p>Research Associate, COE-AI</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img  className="img1" src={Shambhu} alt="this is college logo" ></img>
</div>
<div className="content">
<h3>Mr. Shambhu Sharan
</h3>
<p>Research Associate, COE-AI
</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="single-team">
<div className="image">
<img className="img1" src="https://www.inifdpatna.com/wp-content/uploads/2019/01/dummy-female.png" alt=""></img>
</div>
<div className="content">
<h3>Ms.Mahima Das</h3>
<p>Technical Assistant, COE-AI</p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="last-img">
<div className="image">
<img className="img1" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhIYEhIYDxUfEhgYDx8SEhAlJSEnJyUhJCQpLjwzKSw4LSQkNEQ0ODs/Nzc3KDFGSkhKVzxCQz0BDAwMDw8QGRERGDEhGSExMTE0NDExNDc2MTE0P0A0ND81MT8xPD9AMTo/MTExODExMTQ/NDE/MT80NDExMTExMf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xAA+EAABBAADBQUECAYBBQEAAAABAAIDEQQSIQUxQVFhBhMicZFSgaGxBxQyQmKSwdEjU3Jz4fCiJDRDRGMz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACYRAAICAgIBBQACAwAAAAAAAAABAhEDIRIxQQQTIjJhUcEFFJH/2gAMAwEAAhEDEQA/APTQUtqEYk2W3qB7Iry810F+YbqS0AiUJAhAxwKUFMTgUICQOQHKF8gG80ofrbeenPggDtBQuaLFNcSGuBI30dy6A5ACoQhAwSgpEBAh6cwpicgESITW2nIGCEIQAWltIhKxDkJoKW07ChUJLQmBnBiorsXd+yeVLqwuID7FHhvaQngJ4CQDglSIQMVcW1NpR4eN0khoBpK7CV5n9LckgELbqMlxP4iKAHxJQBW7c7aSYsuZGe7jB1NkOcszBjMjrY92a/tZiHKqieBp/pWl2T2fElOe8svcK1TlKMVshGMpPQ3AbfkikD45HMI36mn+Y4r0/s72yjn7uOTwyk0CG/w3cvJZbDdl46pxDh1bSqNpbM+qyXG+hdjp5KEcsZOicsUoqz28OCFn+yO0jicMx7jbh4XHnSvLToVkiE3MlBTGOBSgptoQIlBSgprSlQSHoTQUtoEKhNtLaAFQktKgAQhCAKwBOATQlQiI5CalCBpirz/6W+7OEjzGpGyeDrY1H+8lvnFeZ/Snh3ZsK8nw53jL7hR+BS6BbPN9kYcySAcG6uW5h2xHHlpjXAUHZXnM34Km7GhmeQvAIc/W+Wq0eK2ZgozmG93A0Gt99blRlkm6ZoxRaWjsG2Y2ta4g5TuoWVXdonxyYd8keawLpzcrgrHH4DDywxhsjW0ALafs2ePvUM/Z6SLCTl8gkaYX5Rnz8DrdBUxSTLJdFz9GLXDBlx3OkcRr5D9FtgVQdkMIyPCRBgItjSb32Rqr4LYmZGh4KdaiSgoCyS060xOKdjFtFpAlTEKCnB6YhAWS2kzKNCAsltLajzJcyiMkzITLQixUV4KUFNRakIfaExOBRYhVme2Oy/rMJA+2zxM0vcN3xWmVftXERxxukkcGNDTZJQxo8P7NzV3kZ0III59VeeKR+VxAjLdHHXXlvCosRk+syyQnwOkcW6cCbV1s/Fx0WygjqFRPTs1YXqmdWJwX1ZuZtTW0jw2HMHMcOCttmTvlY2J5ytcACTwVccVA1pEdlx5p0WGzvikjnGdriHM3FnmP9/euK5Posm6Wj03ARtYwNb9kABvouu1X7KmzRjSiB4gu8FaTH2OtK0pqAiwJbTgoU9qKAehIi0AOQm2i0WKhbS2m2lTsYqElJQi0IEItCWgOEFLaYgFSoQ9UvaPtHFgWsMgc9777tjas1vJPAahXNrx36TcfnxpjB0jiY3pZ8R+aCUEmybavbvGSk924Qs4Bg8XvcdfSljcftGWV2aSR8h5veXH4pnf7uu9crxqehSRdJRrRc4B4LARwNFXTYWmis5sSYCTu3Gg7dfPgtRFERoqMmmWY42iXDRCwK4qo7QYl8WJe6N1ZSy/yi1d+GJhkkOg+yOLzyWPxM5e57nG3OslRx25N+CySo1Gye3GJhcMzu8jIBIc0Efv8V6TsPtNBi6a05JMt5Dx8jxXg0TvC2+tq62fiiyQPY4tIIykcCFoK+EZHvgTlU7G2tHPFHIHAPLfG2xbTx0ViJEtGaSadMltKCo2vTgUxEmZJnTbSEoAkzJM6baLQBJmS2osyW0gJLTgVGDSTOgCW0KLOhAHKhNtFqwiOXzv2gxRkxU8hN5p3n/kaXve1sYIYJpT9yJ7vQaL51xB1vmosnBdsjcdPIqWHxZ+qgJq07Cv+KZNPYAajna02ydt2wh5DpGjw39/ks/KyiDwtKxmbVnhcPUqEoqSLItxeiyxmPdI42S7Xidy4xvUcN8d/EKUJJVpE7b2yBrqBF73rugfu6KskNG/xFdkB0CkxRlujS4HEDSzQI0Nu/Q2r7B7Wnj1ZK5wG8X3zW+7R3zWQwL9C3kbV/s3DSyyNIc0RhuheSXE/hI1Hqs84Nu0WZKq2bLZ/a0EAzNAbuzsOZg8+XvpabDYlkjQ5jg5p5LzPFRuikDZAWyOByPbWZw6EaOHQgFWOw5HRuzskDW65mtHgfyNH7PkoxyOLpmeUE1aPQw5FrgwGObIOThvH6ruBWlNMpochIi06ChUIBRSQCoSIQAApUiEAciEBIXKYjLfSPi+7wD2g0ZHsYOe/Mfg1eLThes/Sfgg/DtnL3Wx4aGX/AAzZ31z6ryiQ6WRp01S8lsPqcjinsOgUUrhwQx6ZC9nfmtoUTSWEOG6tUyN66W6hRLls6Y5GvGmhTHaFcb461CY6UjiiiTnXY7EvGg43quqI7qVexwLtdNF1YbzTohGVyLOKdrHAuIArXn6Kz2bthpLmNkyga5jTB5Wd3oVTRRCtAuzYzxFJ96jo7Kac7ooSVovd1RZ4rBveQZMSyMHVp8cr76X8wuzYmPLnU94saPLdzgdzhfEaWnDEPYHyOEj2a5WSYgRlnUUQoMJPmMYe0Hx0XOn7yTWh5AG1mZWjVbMxLoJA5x1ztZLydf2H+RuvetvHIHAEcQsDGC9rb1LsC8OPtFpsH1Wr2JiC+JpPJvxAPztWY5eCqcfJbZ0ocmAoVxWSgotRgp9pDFtNJSlIgTHNckTUJgcpKaXJrnqIvVlETMfSJHNJh444o3SB01yZGF7hQ00C8mmZlJadCDRB0I6L318oaC4mgBZJ4LyeHCQy4qR9iSMyvLTwdqq5y4qy7E70ZRuz3vLaBDHOrNRy+q4QvYcZho3wlmUZcmgrd5LyGRmVzm8nEKGHNzvXQZYcXaHsd8k/vDoByCjYN/kUkl2K5BXEVKkPfI7ioS5PDHHr708wmtSECabI4gL1KuNk7PkmeWRi+ZJ0Ck7P9mZsW4EDJHeryNPcOK9S2NsOHBsDWDxfecftvVOTIoql2W44szmG7I5WXJJrW4M09Ss+3Zb2PBlex4PBk4YGf1aX6L0fH4lgaReqwz8N3feOMkEc16NyBzXjnfD0VeOU5Jtlk5VSGYtzNxEFNZ4HB5cXdDu9Umz5AIwyPNHI99kMZUUjG6nxHUkLmxT2RxODZ2te8jvGNioO9EmGcRA6RzHzMBysdnyMgcTZ0vcdOCbRDkb7Bi2wHgcJP+qvuzwqMX/LZ8lktk4kOhjcDo1mVx9mxqtV2fPgcDvFCuOiqhL5UOS0XTXJ4coFI0rSmVNEiUFR2i0yPEkLkWmWkQFEloTLSJWKiuc9MLkxzkzMtJAqO1kx7juwSC+7rkN/6LznDSfV5Aw1lDGlx5E6/qtv2mxAzOG/+G0D8Nus/ABYfblF01D2AOnh1WOUuU3F9GiMeMVI3+zakjvhS827W7DdhJzvMTyXRu+YPUfsvQ9jYUwMjjJP/wCTCbPGvF8QV0drdltxWDe0C5GDNH5jh7xYVeP4TaJy+UbPGWcfJEh3eSfEzhWpWw2B2IdNlknuNho5dz3fstcnGKtszq3pIyGEwkkrwyNjpHng1pcV6H2a7AltSYsgnQtjBto/qPHyHxWvweFwuCjyRsbGONb3eZ4qm2n2tY05WHU7gN5WeWWU3xii+MOK5SZoXmOJtChQ0A4LMbZ28G3ThfAXquN+PL6dISQfug0PfzXZhpm0MoDQeQq1rw/42c9zdGXL6+MNRVlNHHPP4nOyN4A/aK7MVBlYAQDG03l7pr8u/wCyKVvHEx+4C73jRJiMMDG8B1EtI8jWi6X+rjhjcUjnP1eSWRNsxe1sQ6SMSFznDMGxu7kMHkVDnysNta1zYDmDn5my59zmjg4Xw5KbtDhnxPYxzZG6WW52P99NJpcWIpsI8LKe/M03mniI4HcQD1sLjuDWmjrKafTNR2QfeEmF6tdevuWpw0ojlDi4Ad0x3mOPzKxfZI/wcSb+566j/K0D98YBv/piTr5LHNpTZfFXE1Tdswn7597D+ylZtSH+Z/xP7LI4CQvYDxA1XWAeSs5tCUU0akbRi9sJ7cdH/Mb+ZZcDmPgkIHL4I95i4GqGLj/mN/OEoxcftt/OFkq6EJDX+hP3fwXA2AxUftt/MELHEt5oR7v4HD9Lx5UZKR7kwlb6Mpie0WIuaT+4wejR/lZuV2Z+u50zb9Va7bcTPJ/ef8FUQYZ0r442kAulABPDVYF92/02t/BL8PRcVOGykE/dGisGYpjmAA3YWe2s1rptTRaAD+W/2XBhTIxzS0ngPfVonFOTY4L4ot9l9lIIpHTOHeSF5LQR4I7N6Dn1V3tHFthje4jQNsqqi20yOJ0sxyMaaB9r91htv9qX4t2RoLIgdBxf1P7JwhLJLfRCco41+htXbM0rj4qbwA4KtwhpxedT6qIS9VNG9dTHCEWqRz5zlLtlvBIXW42Wjf16KX644u310XJFjASI8oaA3Tr1TZHUQQtfP+GZ+P8AJasx8kbxI3X2h7S0kUoljzsOjmkG94PVY8vse5dmxMeWPLSfCd4U4y3TKpwTVrssPrMby6OQMaWvpzvviuNcVne0GHjgNxuYWyRgG2W51O1LfZO7loVttoY3M1sb4Y5I8oy5tD68Fndq7PjlYR9XbEReVzHl2Q8+o3WFT6iLnGq6H6eShLvs4+z02SKUc2K4ZifEz+yR8lncGcrXt/8An+i7opfHH/bXnMkfmz0UK4IuNlz5XUTQJr9v1Wgb5rGB5B0NcunJanAYjvI2vGljUcuatnGtlMH4O9oKaWJW+acD1VRYRuaU0g/6F0WgnoEWBzObpw9EKakIsDpJTSlJTC5dVmA882rZnkoWBiX301Kq8HP3ckMjtA3EtJvTTN+ytNqHLPKK1dM+vW1U4kNeG2CWZjYGhNcliWpGt7gX+2toxvxRjbmLswbbaynTdfOwn4KZzbbR8LBvG4kV+ix0rXNLMl2He/oUHaczXh4kdbdB4jlPSuSucVLyVxySj2bXHYmAQsEz8uUHK3NWbnpxWRxEMDyXRBzR10HyUk2OZOLeKkG+9UuFxscZ4E8i1X4oxSpsz5XKUuSKt8L2Oqj0vcfehmKLSAW/FWe1NqNkA8Lc33aFKLD7PbQe94c865b+yrOmknsrVu21ojke/QhosGwb3KyY8PbmHomwsadTqE/FO7unximOHjbw81pUa2VN3omYfRRTOykOHBPicDqDYPwSyMsKXgiavs5iopQ2OZrXDgSAch5q721s2aGEOikY1gDy9piaM+7LQrlfFec7NxJjfy1Xft1k7i2eF73WKe0yEtbpQ05Hd5qOW3HkvAoRipU/JwuLfG4cYSa9nfopYDb4/wCz+6ggjdbxI0MBZW/XqPVd+HY1rg6g4hlDx2PguDNpybO1C+KCQLgk2jLHJlbmDSRqHUB8F3ylccrlopNFV07R0M2riR/5H/nUo2zP7br6gOWd2rI5tZXEWeDqXBDjZA4XI4j+slR9ofum1G3px993vYCns7RT8XD3xf5WQjxry43Ia4b087RcCfHpw8Kj7Qe4bAdppfwfkKFkBtM783wQj2vwfuI9bOI6aeaaMRfD4qF/LhxQt7iY1IxW13f9Qesr1wYaDvO7ZdZpHi+W9dm2P+5P9b1xYeTIGO5GQj0NLDXyNl/EVpBHiB86tvqumDugWG9WEllvDmNv8JHVQYbF0wNA1pxs8bofC045mhx0OWXKbaNx3FJ66YKn2iRmFw4Y6PNbXPDnWQCSOt7k7FYXDSSOkdWZwAIa4NboK0A8k4MfUh0AY4ZjQpw4lOjLnkCNwLXAlrstWASLI9PVR+T8smuC8HNJgMLlAaKIJog6nzN6qtdhw11h3lqFctAdmc5xDAXAjSxQ5+4rkfA0B1nUtYY93G7HwV2HkpK2VZeLi6RHGaC654rjAPsriaNWjmVZTjwgrrraOY+ypgkyOAI0JpWReNeVbr3LixMNixvGqWKYGiPihadA1ewnbRtXuw8b90qqkZmGnqocLMY3g8L1TXe+hNWv069pYJ0cmILvE10eaN2WhvGnmE3DtHeM0/8AWs/FXzmieJ0ZP2mHK72SqRkbmTNY4U5sBBHquX6v07xytfVnQ9Lm5xqXaEknPsn4LkfLzBU0rlySPUUSZx7QeHkD8PJVdVpyVhiXUR1XNI0BwJFjipkCbCPynnoufEHxE9V14aIucaRPACXDiFHyOtHEXXwQn4cC6cP8IUhHun1VnX1TXYRnM+qELXSMlswG3owMW4D2nfJUT7LYx+N3zQhc1/dnRX0RNgy0HLI0i6DTdADSz8F3z4hhkkEesb2ksvmDp8kISl0ESbZYfKL00hf3wLq0G817wmYWUxxyNotIYWtNaamiRfAEIQl1VEu7JHPjdAWA/wAR73O3iqLRr66Ixez4+8wkYksEMLz/AFjd616oQroL+iqXX/SvyASOym2guynnrou148I80IXVx/U5suyFgsm9NCqmEkOc080iFGfaJR8ljC/QKOePiPS9UIU2BYbHxmVwY7dw6K7nwQlLZG6SNaWj8YPAoQnOKnjaZUpOGRNGXnjeLBAvjquN7Xch6oQuUdQr8a46AiuKRgzNQhIR3bPid4tSAAaqv1XHKSx5Js3vtCFFdj8EWJYftV5oQhSIH//Z" alt=""></img>
</div>
<div className="content">
<h3>Ms. Shreshtha Singh
</h3>
<p>Technical Assistant, COE-AI </p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="last-img">
<div className="image">
<img className="img1" src="https://www.inifdpatna.com/wp-content/uploads/2019/01/dummy-female.png" alt=""></img>
</div>
<div className="content">
<h3>Ms. Pooja Gambhir
</h3>
<p>JRF, COE-AI </p>
</div>
</div>
</div>
<div className="col-xl-3 col-md-6 col-sm-10">
<div className="last-img">
<div className="image">
<img className="img1" src="https://www.inifdpatna.com/wp-content/uploads/2019/01/dummy-female.png" alt=""></img>
</div>
<div className="content">
<h3>Mrs. Nidhi Arora
</h3>
<p>JRF, COE-AI </p>
</div>
</div>
</div>

</div>
</Bounce>
</div>

</div>
</Zoom>
    
    );
  }
  
  export default Aboutus;
