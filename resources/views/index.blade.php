<html>
    <head>
        <meta charset="UTF-8">
        <title>Krungsri Prime</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href={{ asset('/css/font.css') }}>
        <link rel="stylesheet" href={{ asset('/css/index.css') }}>
        
    </head>
    <body>
        @include('utils.navbar')
        @include('components.banner')
        @include('components.youngblock')
        @include('utils.footer')
    </body>
</html>