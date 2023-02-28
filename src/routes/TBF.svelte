<script>
	let src = '/src/icon/TBF-Logo-Black.png';
</script>

<style>
      * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }

  body {
    color: #333;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }

  header {
    margin: 30px auto;
    position: relative;
    height: 50px;
  }

  header #logo {
    float: left;
    left: 0;
    margin-top: 5px;
  }

  img {
    height: 40px;
  }
  header .navigation {
    float: left;
    padding: 12px 0 0 350px;
  }

  header .navigation li {
    display: inline-block;
    margin-right: 15px;
  }

  header .navigation li a {
    color: #1f1f1f;
    font-size: 14px;
    text-decoration: none;
    transition: 0.3s color;
  }

  header .navigation li.active a,
  header .navigation li a:hover {
    color: #fdc200;
    font-weight: bolder;
  }
  header .login {
    position: absolute;
    right: 0;
  }

  header .login button {
    background: none;
    background-color: #fdc200;
    border: 2px solid #fdc200;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    width: 100px;
    height: 30px;
    margin-top: 10px;
    transition: 0.3s border-color;
  }

  header .login button:hover{
    font-weight: bold;
    font-size: 16px;
  }
</style>

<body>
    <header class="clearfix"> 
        <h1 id="logo"> <a href=""> <img src={src} alt="LogoTBF"></a></h1>
        <nav class="navigation">
            <ul class="con">
                <li class="btn"> <a href="#"> Home</a></li>
                <li class="btn"> <a href="#"> About</a></li>
                <li class="btn"> <a href="#"> Service</a></li>
                <li class="btn"> <a href="#"> Portfolio</a></li>
                <li class="btn"> <a href="#"> Blog</a></li>
                <li class="btn"> <a href="#"> Contact</a></li>
            </ul>
        </nav>
        <p class="login"> <button>Login</button> </p>
    </header>
</body>

