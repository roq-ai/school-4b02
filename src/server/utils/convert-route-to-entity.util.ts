const mapping: Record<string, string> = {
  'it-staffs': 'it_staff',
  parents: 'parent',
  schools: 'school',
  students: 'student',
  teachers: 'teacher',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
