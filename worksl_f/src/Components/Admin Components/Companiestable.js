import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CompanyRow from './CompanyRow';
import { Button } from 'react-bootstrap'
import {Redirect} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const CompaniesTable = () => {
  const {t, i18n} = useTranslation();
  const [redirectAdd, setRedirectAdd] = useState(false);
  const company = useSelector(state => state.company.company);
  if(redirectAdd){
    return <Redirect to='/companysave'/>
  }
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">ID</th>
<th scope="col">{t("company.name")}</th>
<th scope="col">{t("company.type")}</th>
<th scope="col">{t("company.address")}</th>
<th scope="col">{t("company.edit")}</th>
<th scope="col"><Button variant="success" onClick = {()=> setRedirectAdd(true)}>{t("company.add")}</Button></th>
</tr>
</thead>
<tbody>
    {
      company.map((company) => <CompanyRow company = {company} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default CompaniesTable;