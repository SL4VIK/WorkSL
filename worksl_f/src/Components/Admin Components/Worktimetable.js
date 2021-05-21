import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import WorktimeRow from './WorktimeRow';
import {useTranslation} from 'react-i18next';

const WorktimeTable = () => {
  const {t, i18n} = useTranslation();
  const worktime = useSelector(state => state.worktime.worktime);
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">{t("date")}</th>
<th scope="col">{t("time")}</th>
<th scope="col">{t("rest")}</th>
<th scope="col">{t("user")}</th>
<th scope="col">{t("edit")}</th>
<th scope="col">{t("remove")}</th>
</tr>
</thead>
<tbody>
    {
      worktime.map((worktime) => <WorktimeRow worktime = {worktime} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default WorktimeTable;