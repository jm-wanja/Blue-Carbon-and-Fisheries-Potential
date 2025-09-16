function ResultsCard({ title, value, color = 'bg-blue-100 text-blue-800' }) {
  return (
    <div className={`p-4 rounded-lg shadow-sm ${color} flex flex-col items-center justify-center`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

export default ResultsCard;
