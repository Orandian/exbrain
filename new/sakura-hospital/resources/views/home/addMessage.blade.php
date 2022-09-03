@extends('layout.app')

@section('title', 'Add Message')

@section('body')
    <div class="uk-container uk-container-small">
        <div class="uk-card uk-card-default uk-card-body uk-margin-medium-top">
            <h1 class="uk-heading-bullet">{{ __('message.send new announcement') }}</h1>
            <hr class="uk-divider-icon" />
            <form action="{{ route('message.store') }}" method="post">
                @csrf
                <label class="uk-text-bold">{{ __('message.announcement') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="dName" class="uk-input uk-width-1-2" type="text" placeholder="Input the announcement"
                        name="announcement" />
                </div>
                <div class="uk-margin-small-top uk-margin-medium-bottom">
                    <label><input id="ckimportant" class="uk-checkbox" type="checkbox" name="important">
                        {{ __('message.send as') }} <b><i>{{ __('message.important') }}</i></b></label>
                </div>
                <div>
                    <button type="submit" id="btnSave"
                        class="uk-button uk-button-primary">{{ __('message.send') }}</button>
                </div>
            </form>
        </div>
    </div>
@endsection
