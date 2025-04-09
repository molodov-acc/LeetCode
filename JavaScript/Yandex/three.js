const tree = {
  type: "root",
  value: "rootValue",
  children: [
    {
      type: "added",
      value: "1",
      children: [
        {
          type: "removed",
          value: "removedValue",
          children: [
            {
              type: "added",
              value: "2",
            },
          ],
        },
        {
          type: "added",
          value: "3",
        },
      ],
    },
    {
      type: "changed",
      value: "changedValue",
      children: [
        {
          type: "added",
          value: "4",
        },
      ],
    },
    {
      type: "added",
      value: "5",
    },
  ],
};

// вот тут порядок должен сохраняться у объектов в результиующем массиве
// на видео просто в конце reverse делают но это не работает
// я сортирую но это уже не O(n)

function getNodes(obj, type) {
  const stack = [obj];
  const res = [];

  while (stack.length > 0) {
    const curNode = stack.pop();

    if (curNode.type === type) {
      res.push(curNode);
    }
    if (curNode.children) {
      stack.push(...curNode.children);
    }
  }

  return res.sort((a, b) => a.value - b.value);
}

console.log(getNodes(tree, "added"));
