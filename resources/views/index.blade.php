@extends('layouts.default')

@section('custom_head')
    <link rel="stylesheet" href={{ asset('/css/font.css') }}>
    <link rel="stylesheet" href={{ asset('/css/index.css') }}>
    <link rel="stylesheet" href={{ asset('/css/youngblock.css') }}>
    <link rel="stylesheet" href={{ asset('/css/midcontent.css') }}>
    <link rel="stylesheet" href={{ asset('/css/socialcard.css') }}>
    <link rel="stylesheet" href={{ asset('/css/promote.css') }}>
    <link rel="stylesheet" href={{ asset('/css/banner.css') }}>
    <link rel="stylesheet" href={{ asset('/css/bigvideo.css') }}>
@endsection

@section('content')
    @include('components.banner')
    @include('components.youngblock')
    @include('components.midcontent')
    @include('components.socialcard')
    @include('components.promote')
@endsection

@section('custom_script')
    <script>
        var asset_url = "{{ asset('') }}";
        AOS.init();
    </script>
    <script src={{ asset('/js/youngblock.js') }}></script>
    <script src={{ asset('js/jquery.vide.js') }} ></script>
    <script src={{ asset('/js/banner.js') }}></script>

@endsection