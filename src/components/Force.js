function Force(name = '이름 없음', image = '') {
  const forceImage = document.createElement('img');
  forceImage.className = 'force-image';
  forceImage.src = image;
  forceImage.alt = name;

  const forceName = document.createElement('p');
  forceName.className = 'force-name';
  forceName.textContent = name;

  const forceWrapper = document.createElement('div');
  forceWrapper.className = 'force';
  forceWrapper.append(forceImage);
  forceWrapper.append(forceName);

  return forceWrapper;
}

export default Force;
