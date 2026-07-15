*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}


body{
background:#000;
color:#fff;
}


/* HEADER */

header{
position:relative;
background:#000;
border-bottom:2px solid gold;
}


.banner-topo{
width:100%;
display:block;
}



/* BOTÃO MENU */

.menu-btn{

position:absolute;

top:20px;

left:20px;

width:45px;

height:45px;

background:#000;

color:gold;

border:2px solid gold;

border-radius:50%;

font-size:25px;

cursor:pointer;

z-index:9999;

display:flex;

align-items:center;

justify-content:center;

}



/* FUNDO ESCURO */

.overlay{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.75);

opacity:0;

visibility:hidden;

transition:.3s;

z-index:50;

}


.overlay.active{

opacity:1;

visibility:visible;

}



/* MENU */

.menu{

position:fixed;

top:0;

left:0;

width:75%;

max-width:330px;

height:100vh;

background:#050505;

border-right:2px solid gold;

transform:translateX(-100%);

transition:.4s ease;

z-index:80;

padding:20px;

}


.menu.active{

transform:translateX(0);

}



/* CABEÇALHO MENU */

.menu-header{

text-align:center;

padding-bottom:20px;

border-bottom:1px solid gold;

}


.menu-header img{

width:110px;

margin-bottom:10px;

}


.menu-header h2{

color:gold;

font-size:18px;

}


.menu-header p{

color:#ccc;

font-size:12px;

margin-top:8px;

}



/* LINKS */

.menu-links{

margin-top:20px;

}


.menu-links a{

display:flex;

align-items:center;

gap:15px;

padding:15px 10px;

text-decoration:none;

color:white;

font-size:17px;

border-radius:8px;

transition:.3s;

}


.menu-links span{

color:gold;

font-size:20px;

width:25px;

text-align:center;

}


.menu-links a:hover{

background:rgba(212,175,55,.15);

color:gold;

}


.menu-links hr{

border:0;

border-top:1px solid #333;

margin:15px 0;

}



/* BANNER PRINCIPAL */

.banner{

background:linear-gradient(135deg,#111,#000);

padding:80px 20px;

text-align:center;

}


.banner h2{

color:gold;

font-size:22px;

margin-bottom:15px;

}


.banner h1{

font-size:42px;

margin-bottom:20px;

}


.banner p{

font-size:18px;

color:#ccc;

max-width:700px;

margin:auto;

margin-bottom:30px;

}



/* BOTÕES */

.banner button{

background:gold;

color:#000;

border:none;

padding:15px 30px;

margin:10px;

border-radius:50px;

font-size:18px;

font-weight:bold;

cursor:pointer;

transition:.3s;

}


.banner button:hover{

transform:scale(1.05);

}



/* TOCANDO AGORA */

.tocando{

text-align:center;

padding:40px 20px;

background:#111;

}


.tocando h2{

color:gold;

margin-bottom:15px;

}



/* FOOTER */

footer{

text-align:center;

padding:20px;

background:#111;

border-top:2px solid gold;

}



/* CELULAR */

@media(max-width:768px){


.banner h1{

font-size:30px;

}


.banner h2{

font-size:18px;

}


.banner p{

font-size:16px;

}


.banner button{

width:100%;

max-width:300px;

}

}
