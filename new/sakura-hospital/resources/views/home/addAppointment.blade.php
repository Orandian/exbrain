@extends('layout.app')

@section('title', 'Add Appointment')

@section('body')
    <div class="uk-container uk-container-small">
        <div class="uk-card uk-card-default uk-card-body uk-margin-medium-top">
            <h1 class="uk-heading-bullet">{{ __('message.add an appointment') }}</h1>
            <hr class="uk-divider-icon" />
            <form action="{{ route('appointment.store') }}" method="post">
                @csrf
                <label class="uk-text-bold">{{ __('message.choose a doctor') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <select id="sDoctor" class="uk-select uk-form-width-medium" name="doctor">
                        <option value="1">Dr.Yamada Uke (Skin).</option>
                        <option value="2">Dr.Yamazaki Shizue (lung).</option>
                        <option value="3">Dr.Kanagawa Aki (Heart).</option>
                    </select>
                </div>
                <label class="uk-text-bold">{{ __('message.choose a room') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <select id="sRoom" class="uk-select uk-form-width-medium" name="room">
                        <option value="1">102</option>
                        <option value="2">103</option>
                        <option value="3">104</option>
                        <option value="4">105</option>
                        <option value="5">106</option>
                        <option value="6">107</option>
                    </select>
                </div>
                <label class="uk-text-bold">{{ __('message.appointment date') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="dDate" class="uk-input uk-form-width-medium" type="text" placeholder="DD/MM/YYYY"
                        name="appointment_date" />
                </div>
                <div>
                    <button type="submit" id="btnSave" class="uk-button uk-button-primary">Save</button>
                </div>
            </form>
        </div>
    </div>
@endsection
