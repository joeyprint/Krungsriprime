@extends('layouts.default')

@section('custom_head')
    <link rel="stylesheet" href={{ asset('/css/font.css') }}>
    <link rel="stylesheet" href={{ asset('/css/index.css') }}>
    <link rel="stylesheet" href={{ asset('/css/youngblock.css') }}>
    <link rel="stylesheet" href={{ asset('/css/midcontent.css') }}>
    <link rel="stylesheet" href={{ asset('/css/socialcard.css') }}>
    <link rel="stylesheet" href={{ asset('/css/promote.css') }}>
@endsection

@section('content')
    @include('components.banner')
    @include('components.youngblock')
    @include('components.midcontent')
    @include('components.socialcard')
    @include('components.promote')
@endsection