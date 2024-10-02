interface ButtonSet {}
interface _ButtonSet {
  /**A single "OK" button, indicating an informational message that can only be dismissed.*/ OK: ButtonSet;
  /**An "OK" button and a "Cancel" button, allowing the user to either proceed with or halt an
operation.*/ OK_CANCEL: ButtonSet;
  /**A "Yes" button and a "No" button, allowing the user to answer a yes/no question.*/ YES_NO: ButtonSet;
  /**A "Yes" button, a "No" button, and a "Cancel" button, allowing the user to either answer a
yes/no question or halt an operation.*/ YES_NO_CANCEL: ButtonSet;
}
