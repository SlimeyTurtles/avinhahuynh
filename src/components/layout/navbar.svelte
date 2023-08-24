<script>
</script>

<main>
    <ul>
        <li class="active"><a href="/">Avinh's Website</a></li>
        <li><a href="news.asp">Portfolio</a></li>
        <li><a href="contact.asp">About me</a></li>
        <li><a href="about.asp">Contact</a></li>
    </ul>
</main>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #04AA6D;
    }
</style>