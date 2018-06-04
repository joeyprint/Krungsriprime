<html>
    <head>
        <meta charset="UTF-8">
        <title>Krungsri Prime</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        
        {{-- custom header --}}
        @yield('custom_head')
    </head>
    <body>

        {{-- navbar --}}
        @include('utils.navbar')

        {{-- content --}}
        @yield('content')

        {{-- footer --}}
        @include('utils.footer')

        {{-- script --}}
        @yield('custom_script')
    </body>
</html>