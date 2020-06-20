function solve() {
  const comparators = {
    ID: (x, y) => x[0] - y[0],
    author: (x, y) => x[1].author.localeCompare(y[1].author),
    severity: (x, y) => x[1].severity - y[1].severity,
  };

  let currentId = 0;
  const reports = new Map();
  let outputRef = null;
  let sortingMethod = 'ID';

  function report(author, description, reproducible, severity) {
    let status = 'Open';
    const statusSpan = el('span', `${status} | ${severity}`, {
      className: 'status',
    });

    const element = el(
      'div',
      [
        el('div', el('p', `${description}`), { className: 'body' }),
        el(
          'div',
          [
            el('span', `Submited by: ${author}`, { className: 'author' }),
            statusSpan,
          ],
          { className: 'title' }
        ),
      ],
      {
        id: `report_${currentId}`,
        className: 'report',
      }
    );

    const newReport = {
      ID: currentId,
      author,
      description,
      reproducible,
      severity,
      element,
    };

    Object.defineProperty(newReport, 'status', {
      get: () => status,
      set: (value) => {
        status = value;
        statusSpan.textContent = `${status} | ${severity}`;
      },
    });

    reports.set(currentId, newReport);
    currentId++;

    render();
  }

  function setStatus(id, newStatus) {
    reports.get(id).status = newStatus;
  }

  function remove(id) {
    reports.get(id).element.remove();
    reports.delete(id);
    render();
  }

  function sort(method) {
    sortingMethod = method;
    render();
  }

  function output(newSelector) {
    outputRef = document.querySelector(newSelector);
    render();
  }

  function render() {
    if (outputRef !== null) {
      [...reports]
        .sort(comparators[sortingMethod])
        .forEach(([id, x]) => outputRef.appendChild(x.element));
    }
  }

  return {
    report,
    setStatus,
    remove,
    sort,
    output,
  };

  function el(type, content, attributes) {
    const result = document.createElement(type);
    if (attributes !== undefined) {
      Object.assign(result, attributes);
    }
    if (Array.isArray(content)) {
      content.forEach((x) => append(x));
    } else {
      append(content);
    }
    function append(content) {
      if (typeof content === 'string') {
        content = document.createTextNode(content);
      }
      result.appendChild(content);
    }
    return result;
  }
}
