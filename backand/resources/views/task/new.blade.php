<form action="/api/tasks" method = "post">
    {{csrf_field()}}
    <input type="text" name="title" placeholder="Title">
    <input type="text" name="description" placeholder="Description">
    <select name="user_id" placeholder="User Id">
        @foreach ($users as $user)
            <option value="{{$user->id}}">{{$user->name}}</option>
        @endforeach
    </select>
    <input type="date" name="end_date" placeholder="End_date">
    <select name="status" placeholder="Status">
        <option value="1">Open</option>
        <option value="0">Closed</option>
    </select>
    <input type="submit" value="Ok">
</form>