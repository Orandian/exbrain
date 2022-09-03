@extends('layout.app')

@section('title', 'Add Room')

@section('body')
    <div class="uk-container uk-container-small">
        <div class="uk-card uk-card-default uk-card-body uk-margin-medium-top">
            <h1 class="uk-heading-bullet">{{ __('message.add new room') }}</h1>
            <hr class="uk-divider-icon" />
            <form action="{{ route('room.update', $roomInfo->id) }}" method="POST">
                @csrf
                @method('PUT')
                <label class="uk-text-bold">{{ __('message.room number') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="rNumber" class="uk-input uk-width-1-2" type="text" placeholder="Input the room"
                        name="room_number" value="{{ $roomInfo->room_number }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.number of patients') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="rPatients" class="uk-input uk-form-width-small" type="number" placeholder="45"
                        name="number_of_patients" value="{{ $roomInfo->number_of_patients }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.total cost') }}</label>
                <div class="uk-margin-small-top uk-margin-small-bottom">
                    <input id="rCost" class="uk-input uk-form-width-small" type="number" placeholder="$100"
                        name="total_cost" value="{{ $roomInfo->total_cost }}" />
                </div>
                <label class="uk-text-bold">{{ __('message.room status') }}</label>
                <div class="uk-margin-small-top uk-margin-medium-bottom">
                    <select id="rStatus" class="uk-select uk-form-width-small" name="room_status">
                        @if ($roomInfo->room_status == 1)
                            <option value="1" selected>Active</option>
                            <option value="0">Inactive</option>
                        @else
                            <option value="1">Active</option>
                            <option value="0" selected>Inactive</option>
                        @endif
                    </select>
                </div>
                <div>
                    <button id="btnSave" class="uk-button uk-button-primary"
                        type="submit">{{ __('message.update') }}</button>
                </div>
            </form>
        </div>
    </div>

@endsection
