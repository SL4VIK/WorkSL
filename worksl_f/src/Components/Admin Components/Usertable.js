import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersRow from './UsersRow';
import {useTranslation} from 'react-i18next';

const UserTable = () => {
  const {t, i18n} = useTranslation();
  const users = useSelector(state => state.users.users);
    return (
      <div>

      <table class="table table-dark">
<thead>
<tr>
<th scope="col">{t("user.id")}</th>
<th scope="col">{t("user.name")}</th>
<th scope="col">{t("user.lastname")}</th>
<th scope="col">{t("user.email")}</th>
<th scope="col">{t("user.company")}</th>
<th scope="col">{t("user.edit")}</th>
<th scope="col">{t("user.me.remove")}</th>
</tr>
</thead>
<tbody>
    {
      users.map((users) => <UsersRow users = {users} />)
    }
</tbody>
</table>
  </div>
        
    )
}

export default UserTable;