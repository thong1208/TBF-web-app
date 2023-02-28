<script>
	let src = '/src/icon/TBF-Logo-Black.png';
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    body {
        color: rgb(0, 0, 0);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        line-height: 1.6;
    }
    /* Layout */
    .about-us {
        margin: 30px auto;
        height: 360px;
    }
    .about-us .detail {
        float: left;
        width: 50%;
        height: 100%;
    }
    .about-us .image {
        float: right;
        width: 50%;
    }

    img{
        width: 100%;
    }

    .about-us .detail div:nth-child(1) {
        color: rgb(0, 0, 0);
        height: 150px;
        width: 480px;
        position: relative;
        font-weight: bolder;
        margin: auto;
    
    }

    .about-us .detail div:nth-child(1) p {
        font-size: 100px;
        text-align: right;
        padding-top: 20px;
    }
   

    .about-us .detail  div:nth-child(2) {
        color: rgb(20, 20, 20);
        height: 200px;
        width: 480px;
        position: relative;
        font-weight: bold;
        margin: auto;
    }

    .about-us .detail div:nth-child(2) p {
        font-size: 100px;
        text-align: right;
        background-color: #fdc200;
    }


</style>

<body>
    <section class="about-us">
        <div class="detail">
            <div><p> BIM the</p></div>
            <div> <p>rigth way.</p> </div>
           
        </div>
        <div class="image">
            <img src="https://static.wixstatic.com/media/14d67e_ac01414355ad4cd4b6164ca0a533a835~mv2.jpg/v1/fill/w_2500,h_1406,al_c/14d67e_ac01414355ad4cd4b6164ca0a533a835~mv2.jpg" alt="">
        </div>
    </section>
</body>