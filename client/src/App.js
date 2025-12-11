import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", price: "", description: "" });
  const [saving, setSaving] = useState(false);

  const apiBase = "/api/v1/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(apiBase);
      setProducts(res.data || []);
    } catch (err) {
      setError(err.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setForm({ name: "", price: "", description: "" });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, price: Number(form.price) };
      await axios.post(apiBase, payload, {
        headers: { "Content-Type": "application/json" },
      });
      closeModal();
      fetchProducts();
    } catch (err) {
      alert("Failed to save product: " + (err.message || err));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="App container">
      <div className="header-row">
        <h1>Products</h1>
        <button className="btn-add" onClick={openModal}>
          Add Product
        </button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="error">{error}</p>}

      <div className="table-wrap">
        <table className="products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && !loading ? (
              <tr>
                <td colSpan="4">No products found.</td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id || p.name}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add Product</h2>
            <form onSubmit={handleSave}>
              <label>
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Price
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  type="number"
                />
              </label>
              <label>
                Description
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
              </label>

              <div className="modal-actions">
                <button className="btn-add" type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button className="btn-add" type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
