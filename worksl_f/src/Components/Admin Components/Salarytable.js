import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import SalaryRow from './SalaryRow';
import { Button } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SalaryTable = () => {
  const {t, i18n} = useTranslation();
  const [redirectAdd, setRedirectAdd] = useState(false);
  const salary = useSelector(state => state.salary.salary);
  if(redirectAdd){
    return <Redirect to='/salarysave'/>
  }
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">{t("cost")}</th>
<th scope="col">{t("hours")}</th>
<th scope="col">{t("salary")}</th>
<th scope="col">{t("month")}</th>
<th scope="col">{t("user")}</th>
<th scope="col">{t("edit")}</th>
<th scope="col"><Button variant="success" onClick = {()=> setRedirectAdd(true)}>{t("add")}</Button></th>
</tr>
</thead>
<tbody>
    {
      salary.map((salary) => <SalaryRow salary = {salary} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default SalaryTable;