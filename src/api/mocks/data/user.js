import Mock from 'mockjs';

const loginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507807270356&di=48b127c04187c122794d6a70364fbf1c&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F1ad5ad6eddc451da226b12f6bcfd5266d0163209.jpg',
    name: '张某某'
  }
];

const users = [];

for (let i = 0; i < 86; i++) {
  users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { loginUsers, users };
