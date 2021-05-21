import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import WorktimeuserRow from './UserWorktimeRow';

const WorktimeTable = () => {
  const worktimeuser = useSelector(state => state.worktimeuser.worktime);
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">Date</th>
<th scope="col">Time</th>
<th scope="col">Rest</th>
<th scope="col">User</th>
</tr>
</thead>
<tbody>
    {
      worktimeuser.map((worktime) => <WorktimeuserRow worktime = {worktime} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default WorktimeTable;