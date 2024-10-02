interface Menu {
  /**Adds an item to the menu. The label for a menu item should be in sentence case (only the first
word capitalized).
@param caption The label for the menu item, with only the first word capitalized.
@param functionName The name of the function to invoke when the user selects the item. You can
    use functions from included libraries, such as `Library.libFunction1`.
@return This [`Menu`](https://developers.google.com/apps-script/reference/base/menu.html), for chaining.*/ addItem(
    caption: string,
    functionName: string,
  ): Menu;
  /**Adds a visual separator to the menu.
@return This [`Menu`](https://developers.google.com/apps-script/reference/base/menu.html), for chaining.*/ addSeparator(): Menu;
  /**Adds a sub-menu to the menu.
@param menu The sub-menu, constructed like a top-level menu.
@return This [`Menu`](https://developers.google.com/apps-script/reference/base/menu.html), for chaining.*/ addSubMenu(
    menu: Menu,
  ): Menu;
  /**Inserts the menu into the instance of the editor's user interface.*/ addToUi(): void;
}
