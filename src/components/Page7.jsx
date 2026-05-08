import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // Import indispensable
import "./Page7.css";
import imgTomographie from "../assets/tomographie.png";
import { supabase } from "../supabase";

export default function Page7() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const sendComment = async () => {
    if (!newComment.trim()) return;
    setLoading(true);
    const { error } = await supabase
      .from("comments")
      .insert([{ content: newComment }]);

    if (!error) {
      setNewComment("");
      fetchComments();
    }
    setLoading(false);
  };

  return (
    <div className="page7">
      <div className="image-block">
        <div className="image-placeholder">
          <img src={imgTomographie} alt="Tomographie" />
        </div>
      </div>

      <div className="note">
        <strong>Interprétation</strong>
        <p>Grâce à cette représentation, on peut guider l’analyse vers des zones spécifiques...</p>
      </div>

      {/* BOUTON POUR OUVRIR LE PORTAIL */}
      <div className="open-comments-btn" onClick={() => setIsExpanded(true)}>
         <span>Voir les commentaires ({comments.length})</span>
      </div>

      {/* PORTAIL DES COMMENTAIRES */}
      {isExpanded && createPortal(
        <div className="modal-overlay" onClick={() => setIsExpanded(false)}>
          <div className="comment-card-active" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsExpanded(false)}>×</button>
            
            <h2 className="modal-title">Commentaires</h2>

            <div className="comment-input-zone">
              <textarea
                placeholder="Ajouter un commentaire..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                maxLength={300}
              />
              <button onClick={sendComment} disabled={loading}>Publier</button>
            </div>

            <div className="comments-list-portal">
              {comments.map((comment) => (
                <div key={comment.id} className="single-comment">
                  <small>{new Date(comment.created_at).toLocaleDateString()}</small>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}