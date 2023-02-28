<script>
  import Components from "./Components.svelte";
  import Components2 from "./Components2.svelte";
  import Components3 from "./Components3.svelte";
  // import Components4 from "./Components4.svelte";
  // import Components5 from "./Components5.svelte";
  // import Components6 from "./Components6.svelte";
  // import Headermenu from "./headermenu.svelte";
  import Tbf from "./TBF.svelte";
  import Introduce from "./Introduce.svelte";
  // import Hieuung from "./Hieuung.svelte";
</script>

<head>
  <title> TẬP LÀM WEB</title>
  <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
</head>

<style>



  *{
    margin: 0;
    padding: 0;
  }

  ul{
    list-style: none;
  }

  body{
    color: rgb(0, 0, 0);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;
    
  }

  div{
    background-color: none;
    top: 0;
    width: 1280px;
    margin: auto;
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

  .ListItem {
    margin: 30px auto;
  }

  .ListItem li{
    float: left;
    margin-right: 30px;
    padding: 25px 23px;
    text-align: center;
    width: 360px;
  }

  .ListItem li:nth-child(3n) {
    margin-right: 0;
  }
  .ListItem li:nth-child(3n+1) {
    clear: left;
  }


</style>


<body>
  
  
 <div>
  <Tbf/>
    <!-- <Headermenu/> -->
 </div>
 <div>
  <Introduce/>
</div>
<div>
  <ul class="ListItem clearfix"> 
    <li> <Components  titles = {'UI/UX Design'}/></li>
    <li> <Components2 titles = {'Web Development'}/></li>
    <li> <Components3 titles = {'Digital Markerting'}/></li>
  </ul>
</div>
  <!-- <Hieuung/> -->

</body>