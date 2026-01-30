/**
 * Supabase DB 연동 (insagirok)
 * 팀, 직원, 인사기록, 관리자 계정을 Supabase에서 읽고 씁니다.
 */
(function () {
  var DEFAULT_TEAMS = ['개발팀', '디자인팀', '기획팀', '인사팀', '미지정'];

  function getClient() {
    if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) return null;
    var supabase = window.supabase;
    if (!supabase || !supabase.createClient) return null;
    return supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  }

  window.insagirokDb = {
    getAdminAccounts: async function () {
      var client = getClient();
      if (!client) return [{ username: 'admin', password: 'admin123' }];
      var res = await client.from('admin_accounts').select('username, password');
      if (res.error) { console.error(res.error); return [{ username: 'admin', password: 'admin123' }]; }
      var rows = res.data || [];
      if (rows.length === 0) {
        await client.from('admin_accounts').insert([{ username: 'admin', password: 'admin123' }]);
        return [{ username: 'admin', password: 'admin123' }];
      }
      return rows.map(function (r) { return { username: r.username, password: r.password }; });
    },

    saveAdminAccounts: async function (accounts) {
      var client = getClient();
      if (!client) return;
      var res = await client.from('admin_accounts').select('id');
      if (res.data && res.data.length) await client.from('admin_accounts').delete().in('id', res.data.map(function (r) { return r.id; }));
      if (accounts.length) await client.from('admin_accounts').insert(accounts.map(function (a) { return { username: a.username, password: a.password }; }));
    },

    getTeams: async function () {
      var client = getClient();
      if (!client) return DEFAULT_TEAMS.slice();
      var res = await client.from('teams').select('name').order('name');
      if (res.error) { console.error(res.error); return DEFAULT_TEAMS.slice(); }
      var list = (res.data || []).map(function (r) { return r.name; });
      if (list.indexOf('미지정') === -1) list.push('미지정');
      if (list.length === 0) {
        for (var i = 0; i < DEFAULT_TEAMS.length; i++) await client.from('teams').insert([{ name: DEFAULT_TEAMS[i] }]);
        return DEFAULT_TEAMS.slice();
      }
      return list.sort();
    },

    saveTeams: async function (teams) {
      var client = getClient();
      if (!client) return;
      var res = await client.from('teams').select('name');
      if (res.error) return;
      var current = (res.data || []).map(function (r) { return r.name; });
      var toInsert = teams.filter(function (t) { return current.indexOf(t) === -1; });
      var toDelete = current.filter(function (t) { return t !== '미지정' && teams.indexOf(t) === -1; });
      for (var i = 0; i < toDelete.length; i++) await client.from('teams').delete().eq('name', toDelete[i]);
      for (var j = 0; j < toInsert.length; j++) await client.from('teams').insert([{ name: toInsert[j] }]);
    },

    getEmployees: async function () {
      var client = getClient();
      if (!client) return [];
      var res = await client.from('employees').select('name, team_name');
      if (res.error) { console.error(res.error); return []; }
      return (res.data || []).map(function (r) { return { name: r.name, teamName: r.team_name }; });
    },

    saveEmployees: async function (employees) {
      var client = getClient();
      if (!client) return;
      var res = await client.from('employees').select('id');
      if (res.data && res.data.length) await client.from('employees').delete().in('id', res.data.map(function (r) { return r.id; }));
      if (employees.length) await client.from('employees').insert(employees.map(function (e) { return { name: e.name, team_name: e.teamName }; }));
    },

    getRecords: async function () {
      var client = getClient();
      if (!client) return [];
      var res = await client.from('hr_records').select('id, employee_name, type, content, date').order('date', { ascending: false });
      if (res.error) { console.error(res.error); return []; }
      return (res.data || []).map(function (r) {
        return { id: r.id, employeeName: r.employee_name, type: r.type, content: r.content, date: r.date };
      });
    },

    saveRecords: async function (records) {
      var client = getClient();
      if (!client) return;
      var res = await client.from('hr_records').select('id');
      if (res.data && res.data.length) await client.from('hr_records').delete().in('id', res.data.map(function (r) { return r.id; }));
      if (records.length) {
        await client.from('hr_records').insert(records.map(function (r) {
          return { employee_name: r.employeeName, type: r.type, content: r.content, date: r.date };
        }));
      }
    }
  };
})();
