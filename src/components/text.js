function addText(d3Obj, element, text, id) {
  return d3Obj.append(element).text(text).attr("id", id);
}

export { addText };
