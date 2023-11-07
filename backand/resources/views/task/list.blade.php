@foreach($tasks as $task)
    <form action="/task/edit/{{$task->id}}" method="post">    
    {{method_field("GET")}}
    <div class="form-group">
        <input type="submit" value="{{$task->title}}">
    </div>
    </form>
@endforeach