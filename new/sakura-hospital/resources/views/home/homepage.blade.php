@extends('layout.app')
@section('title', 'Sakura Hospial')

@section('body')
    <div class="main">
        <div class="header">
            <span id="logo"><img src="logo.png" alt="" /></span>
            <span class="contact">{{ __('message.care center') }}
                <p id="phone">
                    <ion-icon name="call"></ion-icon>
                </p>
            </span>
        </div>
        <div class="mainbody">
            <div class="nav">
                <div class="systemname">{{ __('message.sakura hospital') }}</div>
                <ul class="menu">
                    <li class="active">
                        <ion-icon name="apps"></ion-icon> {{ __('message.dashboard') }}
                    </li>
                    <a href="/doctorlist">
                        <li>
                            <ion-icon name="git-network"></ion-icon> {{ __('message.doctor list') }}
                        </li>
                    </a>
                    <a href="/home/logout">
                        <li>{{ __('message.logout') }}</li>
                    </a>
                </ul>
                <hr>
                <ul class="menu">

                </ul>
            </div>
            <div class="body">
                <p class="dashboard">{{ __('message.hospital status') }}</p>
                <div class="h_status">
                    <div class="doctor">
                        <ion-icon name="git-network"></ion-icon>
                        <p class="name">{{ __('message.doctor') }}</p>
                        <p class="count" id="dcount"></p>
                    </div>
                    <div class="nurse">
                        <ion-icon name="people-outline"></ion-icon>
                        <p class="name">{{ __('message.nurse') }}</p>
                        <p class="count" id="ncount"></p>
                    </div>
                    <div class="room">
                        <ion-icon name="bed-outline"></ion-icon>
                        <p class="name">{{ __('message.bed') }}</p>
                        <p class="count" id="bcount"></p>
                    </div>
                </div>
                <div class="detailstatus">
                    <div class="status">
                        <div class="title colorprimary bgsecondary">
                            <ion-icon name="bed-outline"></ion-icon><span id="roomTitle">
                                {{ __('message.room status') }}</span>
                        </div>
                        <table class="table" id="room">
                            <th>{{ __('message.room number') }}</th>
                            <th>{{ __('message.room status') }}</th>
                            <th>{{ __('message.patients') }}</th>
                            <th>{{ __('message.cost') }}</th>
                            @foreach ($roomList as $room)
                                <tr>
                                    <td>Room {{ $room->room_number }}</td>
                                    <td>

                                        @if ($room->room_status == 1)
                                            Active
                                        @else
                                            Lock
                                        @endif

                                    </td>
                                    <td>{{ $room->number_of_patients }}</td>
                                    <td>$ {{ $room->total_cost }}</td>

                                    <td><a href="{{ route('room.edit', $room->id) }}">Edit</a></td>
                                    <form action="{{ route('room.destroy', $room->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <td><button class="text-danger">Delete</button></td>
                                    </form>
                                </tr>
                            @endforeach
                        </table>
                        <a href=""> <button class="btn btnroom">SEE ALL</button></a>
                        <a href="/room/create"> <button class="btn btnroom">Add Room</button></a>
                    </div>
                    <div class="status">
                        <div class="title bgthird">
                            <ion-icon name="mail-unread-outline"></ion-icon><span id="messageTitle">
                                {{ __('message.unread messages') }}</span>
                        </div>
                        <table class="table" id="message">
                            <th>{{ __('message.announcement') }}</th>
                            @foreach ($messageList as $message)
                                <tr>
                                    <td>{{ $message->announcement }}</td>

                                    @if ($message->important != null)
                                        <td>
                                            <ion-icon name="flag-outline" style="color: tomato;"></ion-icon><span
                                                id="vip_msg"> VIP Message</span>
                                        </td>
                                    @else
                                        <td></td>
                                    @endif

                                    <td><a href="{{ route('message.edit', $message->id) }}">Edit</a></td>
                                    <form action="{{ route('message.destroy', $message->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <td><button>Delete</button></td>
                                    </form>
                                </tr>
                            @endforeach
                            {{-- <tr>
                <td>
                  <div class="noti">
                    <label>Reserve VIP room at 9:00 AM</label>
                    <label class="vipview"> 
                      <ion-icon name="flag-outline" style="color: tomato;"></ion-icon><span id="vip_msg"> VIP Message</span>
                    </label>
                  </div>
                 
                </td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="noti">
                    <label>Reserve VIP room at 9:00 AM</label>
                    <label class="vipview"> 
                      <ion-icon name="flag-outline" style="color: tomato;"></ion-icon><span id="vip_msg"> VIP Message</span>
                    </label>
                  </div>
                 
                </td>
                <td>10:00 AM</td>
              </tr>
              <tr>
                <td>
                  <div class="noti">
                    <label>Reserve VIP room at 9:00 AM</label>
                    <label class="vipview"> 
                      <ion-icon name="flag-outline" style="color: tomato;"></ion-icon><span id="vip_msg"> VIP Message</span>
                    </label>
                  </div>
                 
                </td>
                <td>10:00 AM</td>
              </tr> --}}
                        </table>
                        <button class="btn btnmessage">Read More</button>
                        <a href="/message/create"><button id="btnMessage" class="btn btnmessage">Add Message</button></a>
                    </div>
                </div>
                <div class="detailstatus">
                    <div class="status">
                        <div class="title colorprimary bgfouth">
                            <ion-icon name="medkit"></ion-icon><span id="drugTitle">{{ __('message.drug store') }}</span>
                        </div>
                        <table class="table" id="drugs">
                            <th>{{ __('message.drug name') }}</th>
                            <th>{{ __('message.unit') }}</th>
                            <th>{{ __('message.amount') }}</th>
                            <th>{{ __('message.quatity') }}</th>
                            @foreach ($drugList as $drug)
                                <tr>
                                    <td>{{ $drug->drug_name }}</td>
                                    <td>{{ $drug->amount }}</td>
                                    <td>{{ $drug->cost }}</td>
                                    <td class="price">${{ $drug->quatity }}/per item</td>
                                    <td><a href="{{ route('drug.edit', $drug->id) }}">Edit</a></td>
                                    <form action="{{ route('drug.destroy', $drug->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <td><button class="text-danger">Delete</button></td>
                                    </form>
                                </tr>
                            @endforeach
                            {{-- <tr>
                <td>Alcohol</td>
                <td>100 g</td>
                <td>1100</td>
                <td class="price">$1/per item</td>
              </tr>
              <tr>
                <td>Ayahuasca</td>
                <td>1 mg</td>
                <td>200</td>
                <td class="price">$20/per item</td>
              </tr>
              <tr>
                <td>Central Nervous System Depressants</td>
                <td>200 g</td>
                <td>Out of stock</td>
                <td class="price">$15/per item</td>
              </tr>
              <tr>
                <td>Cocaine</td>
                <td>60 mg</td>
                <td>400</td>
                <td class="price">$8/per item</td>
              </tr>
              <tr>
                <td>Hallucinogens</td>
                <td>50 mg</td>
                <td>300</td>
                <td class="price">$22/per item</td>
              </tr> --}}
                        </table>
                        <button class="btn btndrug bgfouth">CHECK ALL</button>
                        <a href="/drug/create"><button id="btnAddDrug" class="btn btndrug bgfouth">Add Drug</button></a>
                    </div>
                    <div class="status">
                        <div class="title colorprimary btnappointment">
                            <ion-icon name="calendar"></ion-icon><span id="appointmentTitle">
                                {{ __('message.appointment') }} </span>
                        </div>
                        <table id="appt" class="table">
                            <th>{{ __('message.doctor name') }}</th>
                            <th>{{ __('message.room number') }}</th>
                            <th>{{ __('message.appointment date') }}</th>
                            @foreach ($appointmentList as $appointment)
                                <tr>
                                    <td>Meet
                                        @switch($appointment->doctor)
                                            @case(1)
                                                Dr. Yamada Uke (Skin)
                                            @break

                                            @case(2)
                                                Dr. Yamazaki Shizue (lung)
                                            @break

                                            @default
                                                Dr. Kanagawa Aki (heart)
                                        @endswitch
                                    </td>
                                    <td>Room
                                        @switch($appointment->room)
                                            @case(1)
                                                102
                                            @break

                                            @case(2)
                                                103
                                            @break

                                            @case(3)
                                                104
                                            @break

                                            @case(4)
                                                105
                                            @break

                                            @case(5)
                                                106
                                            @break

                                            @default
                                                107
                                        @endswitch
                                    </td>
                                    <td>{{ $appointment->appointment_date }}</td>
                                    <td><a href="{{ route('appointment.edit', $appointment->id) }}">Edit</a></td>
                                    <form action="{{ route('appointment.destroy', $appointment->id) }}" method="POST">
                                        @csrf
                                        @method('DELETE')
                                        <td><button class="text-danger">Delete</button></td>
                                    </form>
                                </tr>
                            @endforeach
                            {{-- <tr>
                <td>Meet Dr.Yamada Uke  (Skin).</td>
                <td>Room 102</td>
                <td class="price">2020/12/03 09:00 AM</td>
              </tr>
              <tr>
                <td>Meet Dr.Yamazaki Shizue  (lung).</td>
                <td>Room 202</td>
                <td class="price">2021/01/12 07:00 PM</td>
              </tr>
              <tr>
                <td>Meet Dr.Kanagawa Aki  (Heart).</td>
                <td>Room 401</td>
                <td class="price">2021/02/21 11:00 AM</td>
              </tr> --}}
                        </table>
                        <button class="btn btndrug btnappointment">SEE ALL</button>
                        <a href="/appointment/create">
                            <button id="btnAddAppt" class="btn btndrug btnappointment">
                                <ion-icon name="add-circle"></ion-icon> Add
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    @endsection
