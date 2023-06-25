const AddressDetails = ({ formData, setFormData }) => {
    return (
        <div className="form-container">
            <h1>Address Details</h1>
            <div className="form-group">
                <label htmlFor="street">Street Address</label>
                <input type="text" width={100} name="street" id="street"
                    value={formData.street}
                    onChange={(e) => {
                        setFormData({ ...formData, street: e.target.value })
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city"
                    value={formData.city}
                    onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value })
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state"
                    value={formData.state}
                    onChange={(e) => {
                        setFormData({ ...formData, state: e.target.value })
                    }}
                />
                <p className="error"></p>
            </div>
            <div className="form-group">
                <label htmlFor="zip">ZipCode</label>
                <input type="text" name="zip" id="zip"
                    value={formData.zip}
                    onChange={(e) => {
                        setFormData({ ...formData, zip: e.target.value })
                    }}
                />
                <p className="error"></p>
            </div>
        </div>

    );
};

export default AddressDetails;