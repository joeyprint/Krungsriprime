<html>
    <head>
        <meta charset="UTF-8">
        <title>Krungsri Prime</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href={{ asset('/css/font.css') }}>
        <link rel="stylesheet" href={{ asset('/css/index.css') }}>
        <link rel="stylesheet" href={{ asset('/css/youngblock.css') }}>
        <link rel="stylesheet" href={{ asset('/css/midcontent.css') }}>
        <link rel="stylesheet" href={{ asset('/css/socialcard.css') }}>
        <link rel="stylesheet" href={{ asset('/css/promote.css') }}>
    </head>
    <body>
        @include('utils.navbar')
        @include('components.banner')
        @include('components.youngblock')
        @include('components.midcontent')
        @include('components.socialcard')
        @include('components.promote')
        @include('utils.footer')
    </body>
</html>